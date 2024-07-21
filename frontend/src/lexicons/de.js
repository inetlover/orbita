export default {
  made_with: 'Hergestellt mit <b>Orbita</b>',
  project: 'Orbita',
  actions: {
    save: 'Speichern',
    submit: 'Absenden',
    cancel: 'Abbrechen',
    close: 'Schliessen',
    delete: 'Löschen',
    create: 'Erstellen',
    edit: 'Bearbeiten',
    add: 'Hinzufügen',
    view: 'Vorschau',
    pick: 'Auswählen',
    editor: {
      image: 'Foto',
      video: 'Video',
      file: 'Datei',
      audio: 'Audio',
      pick_video: 'Wähle hochgeladenes Video aus',
      code: 'Code',
      header: 'Header',
      list: 'Liste',
    },
    back: 'Zurück',
    reply: 'Antworten',
    restore: 'Wiederherstellen',
    destroy: 'Löschen',
    scrollTop: 'Geh hinauf',
    search: 'Suchen',
    load_more: 'Mehr laden',
  },
  security: {
    login: 'Login',
    logout: 'Logout',
    register: 'Registrieren',
    reset: 'Zurücksetzen',
    reset_desc: `Du kannst einen Einmal-Link fürs Login anfordern. Nach dem Login kannst du dein altes Passwort ändern.`,
  },
  models: {
    user: {
      title_one: 'Benutzer',
      title_many: 'Benutzer',
      id: 'Id',
      username: 'Login',
      password: 'Passwort',
      fullname: 'Name',
      email: 'E-mail',
      phone: 'Telefon',
      active: 'Aktiviert',
      blocked: 'Geblockt',
      notify: 'Benachrichtigungen senden',
      role: 'Rolle',
      created_at: 'erstellt am',
      active_at: 'Zuletzt online',
    },
    user_role: {
      title_one: 'Benutzerrolle',
      title_many: 'Benutzerrollen',
      id: 'Id',
      title: 'Titel',
      scope: 'Scope',
      users: 'Benutzer',
    },
    video: {
      title_one: 'Video',
      title_many: 'Videos',
      id: 'Uuid',
      title: 'Titel',
      description: 'Beschreibung',
      image: 'Vorschau',
      progress: 'Verarbeitet',
      size: 'Grösse',
      width: 'Breite',
      height: 'Höhe',
      active: 'Aktiv',
      streams: 'Streams',
      dimension: 'Dimension',
      created_at: 'Erstellt am',
      qualities: 'Versionen',
      error: 'Fehler verarbeiten',
    },
    setting: {
      title: 'Titel',
      title_desc: 'Projekttitel, auf allen Seiten',
      description: 'Beschreibung',
      description_desc: 'Kurze Projektbeschreibung',
      poster: 'Hauptbild/Poster',
      poster_desc: 'Projekt Avatar. Wird auf der Hauptseite angezeigt.',
      background: 'Hintergrund',
      background_desc: 'Hintergrundbild für die Hauptseite',
      copyright: 'Projekt Eigentümer',
      copyright_desc: 'Wird in der copyright Zeile des Footers angezeigt.',
      started: 'Projekt gestartet am',
      started_desc: 'Das Projektdatum wird in der Copyright Zeile im Footer angezeigt.',
      reactions: 'Reaktionen',
      reactions_desc: `Hier können Sie die verfügbaren Reaktionen für Themen und Kommentare verwalten. Symbole können per Drag-and-Drop sortiert werden.`,
    },
    level: {
      title_one: 'Abo Ebene',
      title_many: 'Abe Ebenen',
      id: 'Id',
      title: 'Titel',
      content: 'Beschreibung',
      price: 'Preise',
      cover: 'Deckbild',
      active: 'Aktiv',
      per_month: 'pro Monat',
    },
    topic: {
      title_one: 'Topic',
      title_many: 'Topics',
      title: 'Titel',
      content: 'Inhalt',
      teaser: 'Introtext',
      cover: 'Cover',
      level: 'Abo Ebene',
      price: 'Preis fürs Topic',
      active: 'Veröffentlich',
      closed: 'Keine Kommentare',
      created_at: 'Erstellt am',
      published_at: 'Veröffentlcht am',
      access: {
        title: 'Topic Zugriff',
        free: 'Gratis Topic',
        subscribers: 'Nur für Abonennten',
        sub_payments: 'Für Abonennten und Einmalzahlungen',
        payments: 'Einmalzahlung',
      },
      delayed: 'Verzögerte Veröffentlichung',
    },
    topic_view: {
      title_one: 'Sicht',
      title_many: 'Ansichten',
    },
    tags: {
      title_one: 'Topic Tag',
      title_many: 'Topics Tags',
      id: 'Id',
      placeholder: 'Geben Sie Themen-Tags mit Komma an',
      available: 'Verfügbare Tags',
      add: 'Hinzufügen',
      duplicate: 'Dieses Tag wurde bereits hinzugefügt',
      invalid: 'Falscher Tag',
    },
    comment: {
      title_one: 'Kommentar',
      title_many: 'Kommentare',
    },
    user_notification: {
      title_one: 'Benachrichtigung',
      title_many: 'Benachrichtigungen',
      active: 'Aktiv',
      sent: 'Abschicken',
      user: 'Empfänger',
      topic: 'Topic',
      comment: 'Kommentar',
      created_at: 'Erstellt am',
      sent_at: 'Gesendet am',
      preview: 'Vorschau',
      type: {
        title: 'Art',
        'topic-new': 'Neues Thema',
        'comment-reply': 'Kommentar antworten',
        'comment-new': 'Neuer Kommentar',
      },
    },
    page: {
      title_one: 'Seite',
      title_many: 'Seiten',
      name: 'Link Text',
      title: 'Seitentitel',
      title_desc: 'Wird für das H1-Tag verwendet.',
      content: 'Inhalt',
      alias: 'Alias',
      alias_desc: `Die relative Adresse der Seite auf der Website. Zum Beispiel wird "about" zu "/pages/about".`,
      link: 'Verknüpfen',
      link_desc: 'Der absolute Link zur externen Ressource, zum Beispiel "https://google.com".',
      external: 'Externer Link',
      blank: 'In einem neuen Fenster öffnen',
      position: 'Position',
      position_both: 'Im Footer und Header',
      position_header: 'Nur Header',
      position_footer: 'Nur Footer',
      position_null: 'Versteckte Seite',
      rank: 'Rang',
      active: 'Aktiv',
    },
    payment: {
      title_one: 'Zahlung',
      title_many: 'Zahlungen',
      id: 'Id',
      user: 'Benutzer',
      type: 'Posten',
      subscription: 'Abo',
      subscription_desc: '"{title}" bis {date}',
      topic: 'Thematik',
      service: 'Service',
      amount: 'Betrag',
      paid: 'Bezahlt',
      link: 'Link',
      created_at: 'Erstellt am',
      paid_at: 'Bezahlt am',
      date: 'Datum',
    },
    reaction: {
      title_one: 'Reaktion',
      title_many: 'Reaktionen',
      id: 'Id',
      title: 'Titel',
      emoji: 'Emoji',
      emoji_desc: 'Kopiere das Emoji-Symbol in dieses Feld',
      active: 'Aktiv',
    },
    redirect: {
      title_one: 'Umleitung',
      title_many: 'Umleitungen',
      description: `Wenn Sie Notizen von einer alten Website auf eine neue Engine übertragen, können Sie hier die Umleitungsregeln gemäß der Dokumentation von <b>nikic/fastroute</b> angeben.<br/><br/>Wenn Sie den Parameter <kbd>{id}</kbd> angeben, versucht der Service, eine Notiz mit dieser ID zu laden und den Playsholder <kbd>{uuid}</kbd> zu setzen.`,
      id: 'Id',
      title: 'Titel',
      from: 'Von',
      from_desc: `Beispiel: <kbd>/sections/&lcub;section&rcub;/&lcub;id&rcub;</kbd>, <kbd>/about</kbd> или <kbd>/lessons/course3</kbd>`,
      to: 'Zu',
      to_desc: `Beispiel: <kbd>/topics/&lcub;uuid&rcub;</kbd>, <kbd>/pages/about</kbd> или <kbd>/tags?id=3</kbd>`,
      code: 'Weiterleitungscode',
      rank: 'Priorität',
      active: 'Aktiv',
    },
  },
  components: {
    table: {
      no_data: 'Nichts anzuzeigen',
      no_results: 'Nichts gefunden',
      records: 'Keine Einträge | 1 Eintrag | {total} Einträge',
      query: 'Suchen...',
      delete: {
        title: 'Bestätigung erforderlich',
        confirm: 'Willst du diesen Eintrag wirklich löschen?',
      },
    },
    upload: {
      status_loading: `Uploaded {uploaded} von total {size}. Es verbleiben {remaining} bei eine Geschwindigkeit von {speed}.`,
      status_paused: 'Uploaded {uploaded} von total {size}.',
      status_finished: 'Erfolgreich {size} uploaded in {duration} bei {speed}.',
      status_error: 'Unerwartetet Fehler vom Server: "{error}".',
    },
    comments: {
      title: 'Kommentare | 1 Kommentar | {total} Kommentare',
      latest: 'Online',
      info: {
        deleted: 'Dieser Kommentar wurde gelöscht',
        guest: 'Du musst eingeloggt sein, um kommentieren zu können',
        closed: 'Das Kommentieren dieses Themas wurde deaktiviert.',
        no_scope: 'Du hast keine Berechtigung zum Kommentieren',
      },
      destroy: {
        title: 'Bestätigung erforderlich',
        text: 'Willst du diesen Kommentar mit allen Antworten wirklich löschen?',
      },
    },
    payment: {
      service: {
        title: 'Beazhlservice',
        scan_qr: 'Scanne den QR Code, um zu bezahlen',
        no_subscription: `Dieser Service unterstützt keine automatischen Zahlungen. Du musst Dein Abo manuell erneuern.`,
      },
      subscription: {
        title: 'Abo abschliessen',
        price: 'Abopreis',
        change: 'Abo geändert',
        upgrade: 'Zusatzzahlung für Abo Upgrade',
        period: 'Abodauer',
        months: 'kein | {amount} Monat | {amount} Monate',
        month_1: 'Wird monatlich verrechnet. Nächste Zahlung am {date}.',
        month_3: 'Wird alle 3 Monate verrechnet. Nächste Zahlung am {date}.',
        month_6: 'Wird alle 6 Monate verrechnet. Nächste Zahlungen am {date}.',
        month_12: 'Wird jährlich verrechnet. Nächste Zahlung am {date}.',
        cancel: 'Du kannst das Abo jederzeit künden.',
        free: 'Du bist auf dem Gratis-Abo. Du kannst jederzeit künden',
        level: {
          current: 'Aktuelles Level',
          new: 'Neues Level',
        },
        paid_until: 'Bezahlt bis am',
      },
      topic: {
        title: 'Dieses Topic entsperren',
        desc: 'Einmalzahlung, um dieses Topic zu sehen.',
        price: 'Bezahlschranke',
      },
      actions: {
        subscribe: 'Abonnieren',
        subscription_pay: 'Abo bezahlen',
        subscription_change: 'Abo ändern',
        subscription_cancel: 'Abo abbestellen',
        topic_pay: 'Nur für dieses Topic bezahlen',
        pay: 'Zahlung machen',
        check: 'Prüfe die Zahlung',
      },
      level: {
        subscribe: 'Abonnieren',
        subscribed: 'Abonniert',
        active_until: 'Aktiv bis {date}',
        active_from: 'Aktiv seit {date}',
      },
      teaser: {
        required: 'Abo benötigt:',
        buy: 'Zugriff kaufen',
        view: 'Ansehen',
      },
    },
  },
  pages: {
    index: 'Hauptseite',
    about: 'Über',
    topics: 'Topics',
    admin: {
      title: 'Admin',
      users: 'Benutzer',
      user_roles: 'Benutzerrollen',
      videos: 'Videos',
      settings: 'Einstellungen',
      levels: 'Abos',
      topics: 'Topics',
      notifications: 'Benachrichtigungen',
      pages: 'Seiten',
      payments: 'Zahlungen',
      redirects: 'Umleitungen',
    },
    user: {
      title: 'Konto',
      profile: 'Profil',
      payments: 'Zahlungen',
      subscription: 'Abos',
    },
    search: {
      title: 'Suche',
      placeholder: 'Suche...',
      no_results: 'Leider wurde nichts gefunden.',
      results: 'Es wurde nichts gefunden | {total} Datensatz gefunden | {total} Datensätze gefunden',
      sort: 'Sortieren:',
      sort_default: 'Nach Relevanz',
      sort_date: 'Nach Datum',
    },
  },
  widgets: {
    comments: 'Online',
    levels: 'Abos',
    tags: 'Tags',
    search: 'Suche',
  },
  success: {
    profile: 'Profil erfolgreich gespeichert.',
    login: 'Willkommen!',
    register: 'Ein Aktivierungslink wurde an deine Email gesendet.',
    reset: 'Der Autorisierungslink wurde an deine email gesendet.',
    logout: 'Auf Wiedersehen!',
  },
  errors: {
    scope: 'Du hast nicht genug Rechte für diese Aktion. "{scope}" ist notwendig',
    index: 'Gehen Sie zurück zur Hauptseite',
    user: {
      no_username: 'Benutzername erforderlich',
      no_fullname: 'Voller Name erforderlich',
      no_email: 'Email erforderlich',
      username_exists: 'Dieser Benutzername exisitiert bereits',
      email_exists: 'Diese Emailadresse existiert bereits',
      inactive: 'Dieses Konto ist nicht aktiv',
      blocked: 'Dieses Konto ist gesperrt.',
      delete_own: 'Du kannst Deine Konto jetzt löschen',
    },
    user_role: {
      delete_own: 'Du kannst Deine eigene Gruppe nicht löschen',
    },
    login: {
      wrong: 'Falscher Benutzername oder Passwort',
    },
    activate: {
      no_user: 'Der Benutzer existiert nicht oder hat sein Passwort nicht zurückgesetzt.',
      ttl: 'Der Link ist verfallen',
      wrong: 'Falsches temporäres Passwort',
    },
    video: {
      no_image: 'Du hast vergessen ein Bild zum Video hochzuladen',
      pick_none: 'Keine Videos vorhanden',
      pick_not_found: 'Nichts gefunden',
    },
    setting: {
      required: 'Diese Einstellung ist erfordlich',
    },
    upload: {
      no_filename: 'Konnte den Namen der Datei nicht lesen',
      no_size: 'Konnte die Grösse der Datei nicht ermitteln.',
      missing_meta: 'Konnte die Metadaten nicht ermitteln.',
      wrong_offset: 'Falschen upload Teil-Offset',
      wrong_content: 'Falsches encoding des Uploads.',
      write: 'Fehler beim Schreiben der Datei',
    },
    level: {
      no_title: 'Du hast den Namen des Abolevels anzugeben.',
      no_price: 'Du musst den Preis für das Abo angeben.',
      title_exists: 'Dieser Abotitel existiert bereits.',
      price_exists: 'Ein Abolevel mit diesem Preis existiert bereits.',
    },
    topic: {
      title_exists: 'Ein Topic mit diesem Namen existiert bereits.',
    },
    comment: {
      no_content: 'Du hast vergessen einen Kommentar zu schreiben.',
      edit_time: 'Bearbeitungszeit wurde überschritten.',
      wrong_topic: 'Falsches Topic ausgewählt',
      wrong_parent: 'Falscher Elternbeitrag ausgewählt.',
      children_exists: 'Du kannst diesen Beitrag nicht bearbeiten, weil er bereits Antworten enthält.',
    },
    page: {
      alias_exists: 'Das Seitenkürzel muss einmalig sein.',
      title_exists: 'Eine Seite mit diesem Namen existiert bereits.',
    },
    payment: {
      no_service: 'Konnte den ausgewählten Bezahl Service nicht finden.',
      wrong_service: 'Fehler beim Starten des Bezahl Service.',
      wrong_level: 'Konnte das Abo Level nicht laden',
      delete_paid: 'Ageschlossene Transaktionen können nicht gelöscht werden.',
    },
    reaction: {
      title_exists: 'Eine Reaktion mit diesem Namen existiert bereits',
    },
    tag: {
      no_title: 'Sie haben vergessen, das Tag anzugeben',
      title_exists: 'Dieses Tag existiert bereits',
    },
    not_ready: 'Diese Funktion ist noch nicht aufgeschaltet.',
  },
}
