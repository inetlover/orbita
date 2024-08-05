export default {
  project: 'Орбита',
  made_with: 'Сделано на <b>Орбите</b>',
  actions: {
    save: 'Сохранить',
    submit: 'Отправить',
    cancel: 'Отмена',
    close: 'Закрыть',
    delete: 'Удалить',
    create: 'Создать',
    edit: 'Изменить',
    add: 'Добавить',
    view: 'Просмотреть',
    pick: 'Выбрать',
    editor: {
      image: 'Фото',
      video: 'Видео',
      file: 'Файл',
      audio: 'Аудио',
      pick_video: 'Выберите загруженное видео',
      code: 'Код',
      header: 'Заголовок',
      list: 'Список',
    },
    back: 'Назад',
    reply: 'Ответить',
    restore: 'Восстановить',
    destroy: 'Уничтожить',
    scrollTop: 'Наверх',
    search: 'Искать',
    load_more: 'Загрузить еще',
    download: 'Скачать',
  },
  security: {
    login: 'Вход',
    logout: 'Выход',
    register: 'Регистрация',
    reset: 'Забыл пароль',
    reset_desc: `Вы можете запросить одноразовую ссылку для входа в свой аккаунт. После авторизации вы сможете изменить свой старый пароль.`,
  },
  models: {
    user: {
      title_one: 'Пользователь',
      title_many: 'Пользователи',
      id: 'Id',
      username: 'Логин',
      password: 'Пароль',
      fullname: 'Имя',
      email: 'E-mail',
      phone: 'Телефон',
      active: 'Активирован',
      blocked: 'Заблокирован',
      notify: 'Отправлять уведомления',
      role: 'Группа',
      created_at: 'Дата создания',
      active_at: 'Был онлайн',
    },
    user_role: {
      title_one: 'Группа',
      title_many: 'Группы',
      id: 'Id',
      title: 'Название',
      scope: 'Разрешения',
      users: 'Пользователи',
    },
    video: {
      title_one: 'Видео',
      title_many: 'Видео',
      id: 'Uuid',
      title: 'Название',
      description: 'Описание',
      image: 'Превью',
      chapters: 'Таймкоды',
      progress: 'Обработано',
      size: 'Размер',
      width: 'Ширина',
      height: 'Высота',
      active: 'Активно',
      streams: 'Версии',
      duration: 'Время',
      dimension: 'Разрешение',
      created_at: 'Загружено',
      qualities: 'Версии',
      error: 'Ошибка обработки',
    },
    video_quality: {
      title_one: 'Версия',
      title_many: 'Версии',
      status: 'Состояние',
      quality: 'Разрешение',
      progress: 'Обработано',
      processed: 'Готово',
      moved: 'Перемещено',
      created_at: 'Дата создания',
      processed_at: 'Дата обработки',
      moved_at: 'Дата перемещения',
      size: 'Размер файла',
    },
    setting: {
      title: 'Название',
      title_desc: 'Название проекта, используется на всех страницах',
      description: 'Описание',
      description_desc: 'Короткое описание проекта',
      poster: 'Основной постер',
      poster_desc: 'Аватарка проекта, выводится на главной',
      background: 'Фон для постера',
      background_desc: 'Фоновая картинка для главной страницы',
      copyright: 'Владелец проекта',
      copyright_desc: 'Выводится в строке копирайта в подвале',
      started: 'Дата начала проекта',
      started_desc: 'Дата начала проекта используется для формирования строки копирайта в подвале',
      reactions: 'Реакции',
      reactions_desc: `Здесь вы можете управлять доступными реакциями для заметок и комментариев. Иконки можно сортировать перетаскиванием.`,
    },
    level: {
      title_one: 'Уровень подписки',
      title_many: 'Уровни подписки',
      id: 'Id',
      title: 'Название',
      content: 'Описание',
      price: 'Цена',
      cover: 'Обложка',
      active: 'Включено',
      per_month: 'в месяц',
    },
    topic: {
      title_one: 'Заметка',
      title_many: 'Заметки',
      title: 'Название',
      content: 'Содержимое',
      teaser: 'Текст анонса',
      cover: 'Обложка',
      level: 'Уровень подписки',
      price: 'Стоимость заметки',
      active: 'Опубликовано',
      closed: 'Без комментариев',
      created_at: 'Дата создания',
      published_at: 'Дата публикации',
      access: {
        title: 'Настройка доступа',
        free: 'Бесплатный доступ',
        subscribers: 'Только подписчики',
        sub_payments: 'Подписчики и разовая оплата',
        payments: 'Только разовая оплата',
      },
      delayed: 'Отложенная публикация',
    },
    topic_view: {
      title_one: 'Просмотр',
      title_many: 'Просмотры',
    },
    tag: {
      title_one: 'Тег заметки',
      title_many: 'Теги заметок',
      id: 'Id',
      placeholder: 'Укажите теги через запятую',
      available: 'Доступные теги',
      add: 'Добавить',
      duplicate: 'Этот тег уже добавлен',
      invalid: 'Неправильный тег',
    },
    comment: {
      title_one: 'Комментарий',
      title_many: 'Комментарии',
    },
    user_notification: {
      title_one: 'Уведомление',
      title_many: 'Уведомления',
      active: 'Активно',
      sent: 'Отправлено',
      user: 'Получатель',
      topic: 'Заметка',
      comment: 'Комментарий',
      created_at: 'Создано',
      sent_at: 'Отправлено',
      preview: 'Предпросмотр',
      type: {
        title: 'Тип',
        'topic-new': 'Новая заметка',
        'comment-reply': 'Ответ на комментарий',
        'comment-new': 'Новый комментарий',
      },
    },
    page: {
      title_one: 'Страница',
      title_many: 'Страницы',
      name: 'Текст ссылки',
      title: 'Заголовок страницы',
      title_desc: 'Используется для тега H1.',
      content: 'Содержимое',
      alias: 'Псевдоним',
      alias_desc: `Относительный адрес страницы на сайте. Например, если указать "about", получится адрес "/pages/about".`,
      link: 'Ссылка',
      link_desc: 'Абсолютная ссылка на внешний ресурс, например "https://yandex.ru".',
      external: 'Внешняя ссылка',
      blank: 'Открывать в новом окне',
      position: 'Позиция',
      position_both: 'И шапка и подвал',
      position_header: 'Только шапка',
      position_footer: 'Только подвал',
      position_null: 'Скрытая страница',
      rank: 'Сортировка',
      active: 'Активно',
    },
    payment: {
      title_one: 'Платёж',
      title_many: 'Платежи',
      id: 'Id',
      user: 'Пользователь',
      type: 'Предмет',
      subscription: 'Подписка',
      subscription_desc: '"{title}" до {date}',
      topic: 'Заметка',
      service: 'Сервис',
      amount: 'Сумма',
      paid: 'Статус',
      link: 'Ссылка',
      created_at: 'Создано',
      paid_at: 'Оплачено',
      date: 'Дата',
    },
    reaction: {
      title_one: 'Реакция',
      title_many: 'Реакции',
      id: 'Id',
      title: 'Название',
      emoji: 'Эмодзи',
      emoji_desc: 'Скопируйте символ эмодзи в это поле',
      active: 'Активно',
    },
    redirect: {
      title_one: 'Редирект',
      title_many: 'Редиректы',
      description: `Если вы переносите заметки со старого сайта на новый движок, то здесь можно указать правила перенаправления согласно документации <b>nikic/fastroute</b>.<br/><br/>При указании параметра <kbd>&lcub;id&rcub;</kbd> сервис попытается загрузить заметку с таким id, и выставить плейсхолдер <kbd>&lcub;uuid&rcub;</kbd>.`,
      id: 'Id',
      title: 'Название',
      from: 'Откуда',
      from_desc: `Примеры: <kbd>/sections/&lcub;section&rcub;/&lcub;id&rcub;</kbd>, <kbd>/about</kbd> или <kbd>/lessons/course3</kbd>`,
      to: 'Куда',
      to_desc: `Примеры: <kbd>/topics/&lcub;uuid&rcub;</kbd>, <kbd>/pages/about</kbd> или <kbd>/tags?id=3</kbd>`,
      code: 'Код редиректа',
      rank: 'Приоритет',
      active: 'Активно',
    },
  },
  components: {
    table: {
      no_data: 'Нет данных для вывода',
      no_results: 'Результатов не найдено',
      records: 'Записей нет | {total} запись | {total} записи | {total} записей',
      query: 'Поиск...',
      delete: {
        title: 'Требуется подтверждение',
        confirm: 'Вы уверены, что хотите удалить эту запись?',
      },
    },
    upload: {
      status_loading: 'Загружено {uploaded} из {size}. Осталось {remaining} на скорости {speed}.',
      status_paused: 'Загружено {uploaded} из {size}.',
      status_finished: 'Успешно загружено {size} за {duration} на скорости {speed}.',
      status_error: 'Получена ошибка при загрузке на сервер: "{error}".',
    },
    comments: {
      title: 'Комментарии | {total} комментарий | {total} комментария | {total} комментариев',
      latest: 'Прямой эфир',
      info: {
        deleted: 'Это сообщение было удалено',
        guest: 'Вы должны авторизоваться, чтобы писать комментарии.',
        closed: 'Возможность комментирования этой заметки отключена.',
        no_scope: 'У вас недостаточно прав для комментирования.',
      },
      destroy: {
        title: 'Требуется подтверждение',
        text: 'Вы уверены, что хотите безвозвратно удалить этот комментарий со всеми возможными ответами?',
      },
    },
    payment: {
      service: {
        title: 'Сервис оплаты',
        scan_qr: 'Отсканируйте QR код для оплаты',
        no_subscription: 'Сервис не поддерживает автоплатежи, вы будете продлять подписку вручную.',
      },
      subscription: {
        title: 'Покупка подписки',
        price: 'Стоимость подписки',
        change: 'Изменение подписки',
        upgrade: 'Нужно доплатить',
        period: 'Период подписки',
        months: 'нет | {amount} месяц | {amount} месяца | {amount} месяцев',
        month_1: 'Списание средств раз в месяц, следующее списание {date}.',
        month_3: 'Списание средств раз в три месяца, следующее списание {date}.',
        month_6: 'Списание средств раз в полгода, следующее списание {date}.',
        month_12: 'Списание средств раз в год, следующее списание {date}.',
        can_cancel: 'Вы можете в любой момент отменить подписку.',
        free: 'Сейчас вы ничего не платите, и можете в любой момент отменить подписку.',
        level: {
          current: 'Текущий уровень',
          new: 'Новый уровень',
        },
        paid_until: 'Оплачено до',
        cancel_confirm: 'Вы уверены, что хотите отменить автоматическое продление подписки?',
        cancel_change: 'Вы уверены, что хотите отменить изменение уровня подписки?',
      },
      topic: {
        title: 'Доступ к заметке',
        desc: 'Единовременная оплата только за доступ к этой заметке',
        price: 'Нужно оплатить',
      },
      actions: {
        subscribe: 'Оформить подписку',
        subscription_pay: 'Оплатить подписку',
        subscription_change: 'Изменить уровень',
        subscription_cancel: 'Отменить подписку',
        topic_pay: 'Оплатить доступ только у этой заметке',
        pay: 'Оплатить',
        check: 'Проверить оплату',
      },
      level: {
        subscribe: 'Подписаться',
        subscribed: 'Подписка оформлена',
        active_until: 'Активна до {date}',
        active_from: 'Активируется {date}',
      },
      teaser: {
        required: 'Нужен уровень:',
        buy: 'Купить доступ',
        view: 'Просмотреть',
      },
    },
  },
  pages: {
    index: 'Главная',
    about: 'Об авторе',
    topics: 'Заметки',
    admin: {
      title: 'Админка',
      users: 'Пользователи',
      user_roles: 'Группы',
      videos: 'Видео',
      settings: 'Настройки',
      levels: 'Подписки',
      topics: 'Заметки',
      notifications: 'Уведомления',
      pages: 'Страницы',
      payments: 'Платежи',
      redirects: 'Редиректы',
    },
    user: {
      title: 'Аккаунт',
      profile: 'Профиль',
      payments: 'Платежи',
      subscription: 'Подписка',
    },
    search: {
      title: 'Поиск',
      placeholder: 'Поиск...',
      no_results: 'Ничего не найдено, увы.',
      results: 'Ничего не найдено | Найдена {total} запись | Найдено {total} записи | Найдено {total} записей',
      sort: 'Сортировка:',
      sort_default: 'по релевантности',
      sort_date: 'по дате',
    },
  },
  widgets: {
    comments: 'Прямой эфир',
    levels: 'Уровни подписки',
    tags: 'Теги',
    search: 'Поиск',
  },
  success: {
    profile: 'Профиль успешно сохранён',
    login: 'Добро пожаловать!',
    register: 'Ссылка для активации отправлена вам на почту',
    reset: 'Ссылка для авторизации отправлена вам на почту',
    logout: 'До свидания!',
  },
  errors: {
    scope: 'Недостаточно прав для этого действия, требуется "{scope}"',
    index: 'Вернуться на главную страницу',
    user: {
      no_username: 'Укажите имя пользователя',
      no_fullname: 'Укажите полное имя',
      no_email: 'Укажите email',
      username_exists: 'Имя пользователя уже занято',
      email_exists: 'Такой email уже используется',
      inactive: 'Учётная запись не была активирована',
      blocked: 'Учётная запись заблокирована',
      delete_own: 'Вы не можете удалить себя',
    },
    user_role: {
      delete_own: 'Вы не можете удалить собственную группу',
    },
    login: {
      wrong: 'Неправильное имя или пароль',
    },
    activate: {
      no_user: 'Пользователь не существует или не сбрасывал пароль',
      ttl: 'Время действия ссылки истекло',
      wrong: 'Неверный временный пароль',
    },
    video: {
      no_image: 'Вы забыли загрузить картинку для видео',
      pick_none: 'Вы еще пока ничего не загрузили',
      pick_not_found: 'Ничего не найдено',
    },
    setting: {
      required: 'Эта настройка обязательна для заполнения',
    },
    upload: {
      no_filename: 'Не могу определить имя файла',
      no_size: 'Не могу определить размер файла',
      missing_meta: 'Не могу получить метаданные загрузки',
      wrong_offset: 'Ошибка дозагрузки файла',
      wrong_content: 'Неверная кодировка загружаемых данных',
      write: 'Ошибка записи файла',
    },
    level: {
      no_title: 'Вы забыли указать название уровня подписки',
      no_price: 'Нужно указать стоимость подписки',
      title_exists: 'Такое название уже существует',
      price_exists: 'Уровень с такой ценой уже создан',
    },
    topic: {
      title_exists: 'Заметка с таким названием уже существует',
    },
    comment: {
      no_content: 'Вы забыли написать комментарий',
      edit_time: 'Время редактирования истекло',
      wrong_topic: 'Указана неправильная заметка',
      wrong_parent: 'Указан неправильный родительский комментарий',
      children_exists: 'Вы не можете редактировать этот комментарий, потому что у него уже есть ответы',
    },
    page: {
      alias_exists: 'Адрес страницы должен быть уникальным',
      name_exists: 'Страница с таким названием уже существует',
    },
    payment: {
      no_service: 'Не удалось найти указанный платежный сервис',
      wrong_service: 'Ошибка при инициализации платёжного сервиса',
      wrong_level: 'Не могу загрузить уровень подписки',
      delete_paid: 'Оплаченные операции удалять нельзя',
    },
    reaction: {
      title_exists: 'Реакция с таким названием уже существует',
    },
    tag: {
      no_title: 'Вы забыли указать тег',
      title_exists: 'Такой тег уже существует',
    },
    not_ready: 'Эта функция еще не готова',
  },
}
