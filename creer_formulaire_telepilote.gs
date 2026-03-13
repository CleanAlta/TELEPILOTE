/**
 * =============================================================
 * SCRIPT DE CREATION AUTOMATIQUE DU FORMULAIRE RESEAU TELEPILOTE
 * =============================================================
 *
 * INSTRUCTIONS D'UTILISATION :
 * 1. Connecte-toi sur telepilote@gmail.com
 * 2. Va sur https://script.google.com
 * 3. Clique sur "Nouveau projet"
 * 4. Supprime le code existant et colle tout ce fichier
 * 5. Renomme le projet : "Création Formulaire Réseau TELEPILOTE"
 * 6. Clique sur "Exécuter" (bouton ▶)
 * 7. Autorise l'accès à Google Forms et Google Sheets quand demandé
 * 8. Le formulaire et le tableur seront créés automatiquement
 * 9. L'URL du formulaire s'affichera dans les logs (Affichage > Journaux)
 *
 * Compte cible : telepilote@gmail.com
 * Durée d'exécution : ~10 secondes
 */

function creerFormulaireTelepilote() {

  // =============================================
  // 1. CREATION DU FORMULAIRE
  // =============================================
  var form = FormApp.create('Réseau TELEPILOTE — Recensement des opérateurs drone professionnels');

  form.setDescription(
    'Vous êtes diplômé(e) de TELEPILOTE SAS ? Nous construisons le premier réseau professionnel ' +
    "d'opérateurs drone en France et en Europe. En rejoignant ce réseau, vous accédez à des missions " +
    'rémunérées auprès de nos clients industriels (inspection, nettoyage, cartographie, thermographie…). ' +
    'Ce formulaire prend 4 minutes. Vos données restent confidentielles et ne seront partagées ' +
    "qu'avec votre accord."
  );

  form.setCollectEmail(true);
  form.setProgressBar(true);
  form.setConfirmationMessage(
    '✅ Merci ! Votre profil a bien été enregistré.\n\n' +
    'Vous recevrez dans les prochains jours :\n' +
    '→ Une invitation à rejoindre le groupe privé du réseau TELEPILOTE\n' +
    '→ Les premières opportunités de missions disponibles dans votre zone\n\n' +
    "N'hésitez pas à partager ce formulaire avec d'autres télépilotes diplômés TELEPILOTE.\n\n" +
    'À très vite dans le réseau !\n' +
    "L'équipe TELEPILOTE SAS"
  );

  // =============================================
  // SECTION 1 — Identité & Contact
  // =============================================
  form.addPageBreakItem().setTitle('Identité & Contact');

  // Q1 - Nom complet
  form.addTextItem()
    .setTitle('Nom complet')
    .setRequired(true);

  // Q2 - Email professionnel
  form.addTextItem()
    .setTitle('Email professionnel')
    .setRequired(true);

  // Q3 - Numéro de téléphone
  form.addTextItem()
    .setTitle('Numéro de téléphone')
    .setRequired(true);

  // Q4 - Ville / Code postal
  form.addTextItem()
    .setTitle('Ville / Code postal de base')
    .setRequired(true);

  // Q5 - Pays
  form.addListItem()
    .setTitle('Pays')
    .setChoiceValues([
      'France',
      'Belgique',
      'Suisse',
      'Luxembourg',
      'Canada',
      'Autre (préciser)'
    ])
    .setRequired(true);

  // Q6 - LinkedIn
  form.addTextItem()
    .setTitle('Lien LinkedIn ou site web (facultatif)')
    .setRequired(false);

  // =============================================
  // SECTION 2 — Formations & Certifications
  // =============================================
  form.addPageBreakItem().setTitle('Formations & Certifications');

  // Q7 - Formations suivies
  form.addCheckboxItem()
    .setTitle('Quelle(s) formation(s) avez-vous suivie(s) chez TELEPILOTE ?')
    .setChoiceValues([
      'Télépilote de drone civil (CATT / brevet théorique)',
      'Formation pratique multi-rotors',
      'Formation pratique aile fixe',
      'Formation pratique vol en immersion (FPV)',
      'Scénarios opérationnels S1/S2/S3',
      'Catégorie Spécifique (SORA / STS)',
      'Photogrammétrie / Cartographie',
      'Thermographie / Inspection',
      'Audiovisuel / Prise de vue aérienne',
      'Autre'
    ])
    .setRequired(true);

  // Q8 - Année dernière formation
  form.addListItem()
    .setTitle('Année de votre dernière formation TELEPILOTE')
    .setChoiceValues([
      '2014 ou avant',
      '2015', '2016', '2017', '2018', '2019',
      '2020', '2021', '2022', '2023', '2024', '2025', '2026'
    ])
    .setRequired(true);

  // Q9 - Numéro exploitant UAS
  form.addMultipleChoiceItem()
    .setTitle("Disposez-vous d'un numéro d'exploitant UAS (France/EASA) valide ?")
    .setChoiceValues([
      'Oui, à jour',
      'Oui, mais expiré',
      'Non',
      'Je ne sais pas'
    ])
    .setRequired(true);

  // Q10 - Autres certifications
  form.addCheckboxItem()
    .setTitle('Autres certifications professionnelles (facultatif)')
    .setChoiceValues([
      'Habilitation électrique (H0/B0 ou supérieure)',
      'CATEC (espaces confinés)',
      'Travail en hauteur / Cordiste',
      'AIPR (réseaux)',
      'SST / Sauveteur secouriste',
      'Certification thermographie (niveau I, II ou III)',
      'Certification photogrammétrie',
      'Pilote avion/hélicoptère (PPL/CPL)',
      'Autre'
    ])
    .setRequired(false);

  // =============================================
  // SECTION 3 — Équipements
  // =============================================
  form.addPageBreakItem().setTitle('Équipements');

  // Q11 - Drones possédés
  form.addParagraphTextItem()
    .setTitle('De quel(s) drone(s) disposez-vous actuellement ?')
    .setHelpText('Indiquez marque, modèle et nombre. Ex : DJI Matrice 350 RTK x1, DJI Mavic 3 Enterprise x2')
    .setRequired(true);

  // Q12 - Capteurs / charges utiles
  form.addCheckboxItem()
    .setTitle('Capteurs / charges utiles disponibles')
    .setChoiceValues([
      'Caméra RGB standard',
      'Caméra 4K+ cinéma',
      'Caméra thermique (FLIR, DJI Zenmuse H30T…)',
      'LiDAR',
      'Capteur multispectral',
      'Capteur RTK/PPK (géoréférencement précis)',
      'Système de largage / pulvérisation',
      'Système de nettoyage (buse haute pression…)',
      'Projecteur / éclairage embarqué',
      'Autre'
    ])
    .setRequired(true);

  // Q13 - Assurance RC
  form.addMultipleChoiceItem()
    .setTitle("Disposez-vous d'une assurance RC professionnelle drone en cours de validité ?")
    .setChoiceValues([
      'Oui',
      'Non',
      'En cours de souscription'
    ])
    .setRequired(true);

  // =============================================
  // SECTION 4 — Spécialités & Expérience
  // =============================================
  form.addPageBreakItem().setTitle('Spécialités & Expérience');

  // Q14 ⭐ - Domaines d'intervention (question clé dispatch)
  form.addCheckboxItem()
    .setTitle('Dans quels domaines intervenez-vous ou souhaitez-vous intervenir ?')
    .setChoiceValues([
      'Inspection de bâtiments / façades',
      "Inspection d'ouvrages d'art (ponts, viaducs)",
      'Inspection de toitures / couvertures',
      'Inspection de panneaux solaires (thermographie)',
      "Inspection d'éoliennes",
      'Inspection de lignes électriques / pylônes',
      'Inspection industrielle (raffineries, usines)',
      'Nettoyage de bâtiments par drone',
      'Nettoyage de panneaux solaires par drone',
      'Cartographie / Photogrammétrie / Topographie',
      'Modélisation 3D / Jumeaux numériques',
      'Suivi de chantier BTP',
      'Agriculture de précision',
      'Audiovisuel / Cinéma / Événementiel',
      'Surveillance / Sécurité',
      'Recherche et sauvetage',
      'Livraison par drone',
      'Formation / Instruction',
      'Autre'
    ])
    .setRequired(true);

  // Q15 - Nombre de missions
  form.addMultipleChoiceItem()
    .setTitle('Nombre approximatif de missions réalisées depuis votre certification')
    .setChoiceValues([
      "0 (je n'ai pas encore volé en professionnel)",
      '1 à 10',
      '11 à 50',
      '51 à 200',
      '201 à 500',
      'Plus de 500'
    ])
    .setRequired(true);

  // Q16 - Structure juridique
  form.addMultipleChoiceItem()
    .setTitle('Avez-vous une structure juridique pour facturer vos prestations ?')
    .setChoiceValues([
      'Oui, société (SAS, SARL, EURL…)',
      'Oui, micro-entreprise / auto-entrepreneur',
      "Non, mais je suis prêt à en créer une",
      "Non, et ce n'est pas prévu pour l'instant"
    ])
    .setRequired(true);

  // =============================================
  // SECTION 5 — Disponibilité & Mobilité
  // =============================================
  form.addPageBreakItem().setTitle('Disponibilité & Mobilité');

  // Q17 - Statut actuel
  form.addMultipleChoiceItem()
    .setTitle('Quel est votre statut actuel ?')
    .setChoiceValues([
      'Opérateur drone à temps plein (activité principale)',
      'Opérateur drone à temps partiel (activité complémentaire)',
      "Salarié utilisant le drone dans mon entreprise",
      'En recherche de missions drone',
      'Inactif dans le drone actuellement',
      'Autre'
    ])
    .setRequired(true);

  // Q18 - Disponibilité
  form.addMultipleChoiceItem()
    .setTitle('Disponibilité pour des missions')
    .setChoiceValues([
      'Disponible immédiatement (sous 48-72h)',
      'Disponible avec 1 semaine de préavis',
      'Disponible avec 2-4 semaines de préavis',
      'Disponibilité variable selon les périodes',
      'Non disponible actuellement'
    ])
    .setRequired(true);

  // Q19 ⭐ - Rayon d'intervention (question clé géographie)
  form.addMultipleChoiceItem()
    .setTitle("Rayon d'intervention depuis votre base")
    .setChoiceValues([
      'Moins de 50 km',
      '50 à 100 km',
      '100 à 200 km',
      'Toute la France',
      'France + pays limitrophes',
      'Europe entière',
      'International'
    ])
    .setRequired(true);

  // Q20 - Missions multi-jours
  form.addMultipleChoiceItem()
    .setTitle('Accepteriez-vous des missions de plusieurs jours avec déplacement ?')
    .setChoiceValues([
      'Oui, régulièrement',
      'Oui, occasionnellement',
      'Non'
    ])
    .setRequired(true);

  // =============================================
  // SECTION 6 — Intérêt pour le réseau
  // =============================================
  form.addPageBreakItem().setTitle('Intérêt pour le réseau');

  // Q21 - Attentes réseau
  form.addCheckboxItem()
    .setTitle('Qu\'attendez-vous principalement de ce réseau ?')
    .setChoiceValues([
      'Recevoir des missions rémunérées',
      'Trouver des sous-traitants pour mes propres missions',
      'Accéder à des formations complémentaires (prix réseau)',
      "Partager du matériel avec d'autres opérateurs",
      "Échanger avec d'autres professionnels du drone",
      'Obtenir de la visibilité / référencement auprès de clients',
      'Accéder à des tarifs négociés (assurance, matériel)',
      'Autre'
    ])
    .setRequired(true);

  // Q22 - Tarif journalier
  form.addMultipleChoiceItem()
    .setTitle('Quel tarif journalier pratiquez-vous habituellement (ou souhaiteriez-vous pratiquer) ?')
    .setChoiceValues([
      'Moins de 500 €/jour',
      '500 à 800 €/jour',
      '800 à 1 200 €/jour',
      '1 200 à 2 000 €/jour',
      'Plus de 2 000 €/jour',
      'Je ne sais pas encore'
    ])
    .setRequired(true);

  // Q23 ⭐ - Partenaire CleanAlta (question clé)
  form.addMultipleChoiceItem()
    .setTitle('Seriez-vous intéressé(e) pour devenir opérateur partenaire CleanAlta (nettoyage industriel par drone) ?')
    .setChoiceValues([
      'Oui, très intéressé(e) — je veux en savoir plus',
      'Peut-être, selon les conditions',
      "Non, ce n'est pas mon domaine"
    ])
    .setRequired(true);

  // Q24 - Partage coordonnées
  form.addMultipleChoiceItem()
    .setTitle('Acceptez-vous que vos coordonnées et votre profil soient partagés avec des clients du réseau TELEPILOTE pour des propositions de missions ?')
    .setChoiceValues([
      'Oui',
      'Oui, mais je veux valider chaque mission avant',
      'Non'
    ])
    .setRequired(true);

  // =============================================
  // SECTION 7 — Commentaire libre
  // =============================================
  form.addPageBreakItem().setTitle('Un dernier mot ?');

  // Q25 - Commentaire libre
  form.addParagraphTextItem()
    .setTitle('Un mot à ajouter ? Suggestions, besoins, idées pour le réseau ?')
    .setRequired(false);

  // =============================================
  // CREATION DU TABLEUR DE REPONSES
  // =============================================
  var ss = SpreadsheetApp.create('Réseau TELEPILOTE — Réponses opérateurs');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

  // =============================================
  // RESULTATS
  // =============================================
  var formUrl = form.getPublishedUrl();
  var editUrl = form.getEditUrl();
  var sheetUrl = ss.getUrl();

  Logger.log('==============================================');
  Logger.log('FORMULAIRE CREE AVEC SUCCES !');
  Logger.log('==============================================');
  Logger.log('URL du formulaire (public)  : ' + formUrl);
  Logger.log('URL de modification         : ' + editUrl);
  Logger.log('URL du tableur de réponses  : ' + sheetUrl);
  Logger.log('==============================================');
  Logger.log('Prochaines étapes manuelles :');
  Logger.log('1. Ouvre le formulaire en mode édition pour ajouter le logo et les couleurs TELEPILOTE');
  Logger.log('2. Active les notifications email (3 points > Notifications)');
  Logger.log('3. Teste le formulaire avec le bouton Aperçu');
  Logger.log('==============================================');

  // Afficher un popup avec les URLs
  var ui = FormApp.getUi();
  ui.alert(
    'Formulaire créé avec succès !',
    'URL du formulaire :\n' + formUrl +
    '\n\nURL du tableur :\n' + sheetUrl +
    '\n\nOuvre les logs (Affichage > Journaux) pour tous les détails.',
    ui.ButtonSet.OK
  );

  return {
    formUrl: formUrl,
    editUrl: editUrl,
    sheetUrl: sheetUrl
  };
}
