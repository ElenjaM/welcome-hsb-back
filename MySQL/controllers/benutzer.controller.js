/**
 * @file benutzer.controller.js
 * @description Verarbeitet HTTP-Anfragen für Benutzer, ruft Methoden aus dem Benutzer-Modell auf.
 * 
 * @author Kevin Jancen
 * @date 17.05.2025
 * @module controller/benutzer
 */

const bcrypt = require('bcrypt');
const Benutzer = require('../models/benutzer.model');

// Registrierung
exports.register = async (req, res) => {
    const { Benutzername, Password, Rolle } = req.body;

    if (!Benutzername || !Password || !Rolle) {
        return res.status(400).json({ error: 'Alle Felder müssen ausgefüllt sein' });
    }

    const hashedPassword = await bcrypt.hash(Password, 10);

    Benutzer.createBenutzer(Benutzername, hashedPassword, Rolle, (err, result) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(409).json({ error: 'Benutzername bereits vergeben' });
            }
            return res.status(500).json({ error: 'Datenbankfehler', details: err });
        }
        res.status(201).json({ message: 'Benutzer registriert', userId: result.insertId });
    });
};

// Login
exports.login = (req, res) => {
    const { Benutzername, Password } = req.body;

    if (!Benutzername || !Password) {
        return res.status(400).json({ error: 'Benutzername und Passwort sind erforderlich' });
    }

    Benutzer.findBenutzerByName(Benutzername, async (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Datenbankfehler', details: err });
        }

        if (results.length === 0) {
            return res.status(401).json({ error: 'Benutzer nicht gefunden' });
        }

        const benutzer = results[0];

        try {
            const passwordMatch = await bcrypt.compare(Password, benutzer.Password_hash);

            if (!passwordMatch) {
                return res.status(401).json({ error: 'Falsches Passwort' });
            }

            res.status(200).json({
                message: 'Login erfolgreich',
                benutzerId: benutzer.idBenutzer,
                rolle: benutzer.Rolle
            });
        } catch (err) {
            return res.status(500).json({ error: 'Fehler beim Passwortvergleich', details: err });
        }
    });
};

// Alle Benutzer
exports.getAllBenutzer = (req, res) => {
    Benutzer.getAllBenutzer((err, results) => {
        if (err) return res.status(500).json({ error: 'Fehler beim Abrufen' });
        res.json(results);
    });
};

// Einzelner Benutzer
exports.getBenutzerById = (req, res) => {
    const { id } = req.params;
    Benutzer.getBenutzerById(id, (err, results) => {
        if (err) return res.status(500).json({ error: 'Fehler beim Abrufen' });
        if (results.length === 0) return res.status(404).json({ error: 'Benutzer nicht gefunden' });
        res.json(results[0]);
    });
};

// Benutzer bearbeiten
exports.updateBenutzer = async (req, res) => {
    const { id } = req.params;
    const { Benutzername, Rolle, Password } = req.body;

    if (!Benutzername || !Rolle) {
        return res.status(400).json({ error: 'Benutzername und Rolle sind erforderlich' });
    }

    try {
        if (Password) {
            const hashedPassword = await bcrypt.hash(Password, 10);
            Benutzer.updateBenutzer(id, Benutzername, Rolle, hashedPassword, (err, result) => {
                if (err) return res.status(500).json({ error: 'Fehler beim Aktualisieren' });
                res.json({ message: 'Benutzer aktualisiert (inkl. Passwort)' });
            });
        } else {
            Benutzer.updateBenutzer(id, Benutzername, Rolle, null, (err, result) => {
                if (err) return res.status(500).json({ error: 'Fehler beim Aktualisieren' });
                res.json({ message: 'Benutzer aktualisiert' });
            });
        }
    } catch (error) {
        res.status(500).json({ error: 'Serverfehler beim Passwort-Hashen' });
    }
};

// Benutzer löschen
exports.deleteBenutzer = (req, res) => {
    const { id } = req.params;
    Benutzer.deleteBenutzer(id, (err, result) => {
        if (err) return res.status(500).json({ error: 'Fehler beim Löschen' });
        res.json({ message: 'Benutzer gelöscht' });
    });
};