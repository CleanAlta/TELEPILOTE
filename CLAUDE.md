# CLAUDE.md — Guide pour assistants IA

## Projet

**TELEPILOTE** est le dépôt du réseau professionnel d'opérateurs drone de TELEPILOTE SAS / CleanAlta. Il contient la documentation et les outils pour déployer un formulaire de recensement des télépilotes professionnels en France et en Europe.

## Structure du dépôt

```
TELEPILOTE/
├── README.md                              # Présentation du projet
├── CLAUDE.md                              # Ce fichier — contexte pour les IA
├── GUIDE_Google_Forms_TELEPILOTE.md       # Guide pas-à-pas (manuel) pour créer le formulaire
├── creer_formulaire_telepilote.gs         # Script Google Apps Script — création automatique du formulaire
└── .git/
```

## Fichiers clés

| Fichier | Rôle |
|---------|------|
| `GUIDE_Google_Forms_TELEPILOTE.md` | Guide manuel (428 lignes) — 25 questions, 7 sections, instructions pas-à-pas pour Google Forms |
| `creer_formulaire_telepilote.gs` | Script Google Apps Script qui crée automatiquement le formulaire et le tableur de réponses |

## Stack technique

- **Langage** : Markdown (documentation), Google Apps Script / JavaScript (automatisation)
- **Plateforme** : Google Forms + Google Sheets
- **Compte cible** : telepilote@gmail.com
- **Pas de build, pas de tests, pas de CI/CD** — c'est un dépôt de documentation et scripts

## Conventions

- **Langue** : Tout le contenu est en **français**
- **Format** : Markdown avec emojis pour la lisibilité
- **Branches** : `main` (branche principale), branches `claude/` pour les contributions IA
- **Commits** : Messages descriptifs en anglais ou français

## Le formulaire (25 questions, 7 sections)

1. **Identité & Contact** (Q1-Q6) — nom, email, téléphone, localisation, pays, LinkedIn
2. **Formations & Certifications** (Q7-Q10) — formations TELEPILOTE, année, n° exploitant UAS, certifications
3. **Équipements** (Q11-Q13) — drones, capteurs, assurance RC
4. **Spécialités & Expérience** (Q14-Q16) — domaines, nb missions, structure juridique
5. **Disponibilité & Mobilité** (Q17-Q20) — statut, disponibilité, rayon, déplacements
6. **Intérêt pour le réseau** (Q21-Q24) — attentes, tarifs, partenariat CleanAlta, consentement
7. **Commentaire libre** (Q25) — suggestions

### Questions stratégiques (marquées ⭐)

- **Q14** : Domaines d'intervention → dispatch de missions
- **Q19** : Rayon d'intervention → couverture géographique
- **Q23** : Intérêt CleanAlta → recrutement partenaires nettoyage industriel

## Utilisation du script Apps Script

1. Se connecter sur telepilote@gmail.com
2. Ouvrir https://script.google.com
3. Créer un nouveau projet
4. Copier-coller le contenu de `creer_formulaire_telepilote.gs`
5. Exécuter la fonction `creerFormulaireTelepilote()`
6. Autoriser les accès Google Forms et Sheets
7. Récupérer les URLs dans les logs (Affichage > Journaux)

## Contexte métier

- **TELEPILOTE SAS** : organisme de formation drone
- **CleanAlta** : filiale spécialisée nettoyage industriel par drone
- **Objectif** : constituer un réseau de télépilotes professionnels certifiés pour leur proposer des missions rémunérées
