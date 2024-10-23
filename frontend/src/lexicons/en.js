export default {
  made_with: 'Made with <b>Orbita</b>',
  project: 'Orbita',
  actions: {
    save: 'Save',
    submit: 'Submit',
    cancel: 'Cancel',
    close: 'Close',
    delete: 'Delete',
    create: 'Create',
    edit: 'Edit',
    add: 'Add',
    view: 'View',
    pick: 'Pick',
    editor: {
      image: 'Photo',
      video: 'Video',
      file: 'File',
      audio: 'Audio',
      pick_video: 'Pick uploaded video',
      code: 'Code',
      header: 'Header',
      list: 'List',
    },
    back: 'Back',
    reply: 'Reply',
    restore: 'Restore',
    destroy: 'Destroy',
    scrollTop: 'Go Up',
    search: 'Search',
    load_more: 'Load more',
    download: 'Download',
  },
  security: {
    login: 'Login',
    logout: 'Logout',
    register: 'Register',
    reset: 'Reset',
    reset_desc: `You can request a one-time link to log in to your account. After logging in, you will be able to change your old password.`,
  },
  models: {
    user: {
      title_one: 'User',
      title_many: 'Users',
      id: 'Id',
      username: 'Login',
      password: 'Password',
      fullname: 'Name',
      email: 'E-mail',
      phone: 'Phone',
      active: 'Activated',
      blocked: 'Blocked',
      notify: 'Send notifications',
      role: 'Role',
      created_at: 'Was created',
      active_at: 'Last online',
    },
    user_role: {
      title_one: 'User Role',
      title_many: 'Users Roles',
      id: 'Id',
      title: 'Title',
      scope: 'Scope',
      users: 'Users',
      filter: {
        all: 'All Roles',
      },
    },
    video: {
      title_one: 'Video',
      title_many: 'Videos',
      id: 'Uuid',
      title: 'Title',
      description: 'Description',
      chapters: 'Timecodes',
      image: 'Preview',
      audio: 'Audio',
      progress: 'Processed',
      size: 'Size',
      width: 'Width',
      height: 'Height',
      active: 'Active',
      streams: 'Streams',
      duration: 'Duration',
      dimension: 'Dimension',
      created_at: 'Created at',
      qualities: 'Versions',
      error: 'Processing error',
      play: {
        video: 'Return back to video',
        audio: 'Switch to audio',
      },
      download: {
        video: 'Download video ({size})',
        audio: 'Download audio ({size})',
      },
    },
    video_quality: {
      title_one: 'Version',
      title_many: 'Versions',
      status: 'Status',
      quality: 'Quality',
      progress: 'Progress',
      processed: 'Processed',
      moved: 'Moved',
      created_at: 'Created At',
      processed_at: 'Processed At',
      moved_at: 'Moved At',
      size: 'Filesize',
    },
    setting: {
      title: 'Title',
      title_desc: 'Project title, used on all pages',
      description: 'Description',
      description_desc: 'Brief description of the project',
      poster: 'Main poster',
      poster_desc: 'Project avatar, displayed on the main page',
      background: 'Poster background',
      background_desc: 'Background image for the main page',
      copyright: 'Project owner',
      copyright_desc: 'Displayed in the copyright line in the footer',
      started: 'Project start date',
      started_desc: 'The project start date is used to form the copyright line in the footer',
      reactions: 'Reactions',
      reactions_desc: `Here you can manage the available reactions for topics and comments. Icons can be sorted by drag-and-drop.`,
      cover: 'Cover',
      cover_desc: 'This image will be used by default for notes without their own cover.',
    },
    level: {
      title_one: 'Subscription level',
      title_many: 'Subscription levels',
      id: 'Id',
      title: 'Title',
      content: 'Description',
      price: 'Price',
      cover: 'Cover image',
      active: 'Enabled',
      per_month: 'per month',
    },
    topic: {
      title_one: 'Topic',
      title_many: 'Topics',
      title: 'Title',
      content: 'Content',
      teaser: 'Teaser text',
      cover: 'Cover',
      level: 'Subscription level',
      price: 'Price of topic',
      active: 'Published',
      closed: 'No comments',
      created_at: 'Created At',
      published_at: 'Published At',
      author: 'Author',
      author_desc: 'You can specify another user to receive comment notifications.',
      access: {
        title: 'Topic access',
        free: 'Free topic',
        subscribers: 'Only subscribers',
        sub_payments: 'Subscribers and one time payment',
        payments: 'One time payment',
      },
      delayed: 'Delayed publishing',
    },
    topic_view: {
      title_one: 'View',
      title_many: 'Views',
    },
    tag: {
      title_one: 'Topic tag',
      title_many: 'Topics tags',
      id: 'Id',
      placeholder: 'Specify topic tags with comma',
      available: 'Available tags',
      add: 'Add',
      duplicate: 'This tag has already been added',
      invalid: 'Wrong tag',
    },
    comment: {
      title_one: 'Comment',
      title_many: 'Comments',
    },
    user_notification: {
      title_one: 'Notification',
      title_many: 'Notifications',
      active: 'Active',
      sent: 'Send',
      user: 'Receiver',
      topic: 'Topic',
      comment: 'Comment',
      created_at: 'Created at',
      sent_at: 'Sent at',
      preview: 'Preview',
      type: {
        title: 'Type',
        'topic-new': 'New topic',
        'comment-reply': 'Comment reply',
        'comment-new': 'New comment',
      },
    },
    user_connection: {
      connect_to: 'Connect to <strong>{service}</strong>',
      disconnect_from: 'You are connected to {service}, disconnect?',
    },
    page: {
      title_one: 'Page',
      title_many: 'Pages',
      name: 'Link Text',
      title: 'Page Title',
      title_desc: 'Used for the H1 tag.',
      content: 'Content',
      alias: 'Alias',
      alias_desc: `The relative address of the page on the site. For example, "about" will become "/pages/about".`,
      link: 'Link',
      link_desc: 'The absolute link to the external resource, for example "https://google.com".',
      external: 'External link',
      blank: 'Open in a new window',
      position: 'Position',
      position_both: 'Both header and footer',
      position_header: 'Only header',
      position_footer: 'Only footer',
      position_null: 'Hidden page',
      rank: 'Rank',
      active: 'Active',
    },
    payment: {
      title_one: 'Payment',
      title_many: 'Payments',
      id: 'Id',
      user: 'User',
      type: 'Item',
      subscription: 'Subscription',
      subscription_desc: '"{title}" until {date}',
      topic: 'Topic',
      service: 'Service',
      amount: 'Amount',
      paid: 'Paid',
      link: 'Link',
      created_at: 'Created At',
      paid_at: 'Paid At',
      date: 'Date',
      filter: {
        all: 'All Payments',
        paid: 'Paid',
        error: 'Error',
      },
      records: 'No payments | 1 payment, in the amount of {sum} | {total} payments, in the amount of {sum}',
    },
    reaction: {
      title_one: 'Reaction',
      title_many: 'Reactions',
      id: 'Id',
      title: 'Title',
      emoji: 'Emoji',
      emoji_desc: 'Copy the emoji symbol into this field',
      active: 'Active',
    },
    redirect: {
      title_one: 'Redirect',
      title_many: 'Redirects',
      description: `If you are moving content from the old site to the new engine, then you can specify the redirection rules according to the documentation of <b>nikic/fastroute</b>.<br/><br/>If you are specifying the <kbd>&lcub;id&rcub;</kbd> parameter, the service will try to load topic with this id, and set the <kbd>&lcub;uuid&rcub;</kbd> placeholder.`,
      id: 'Id',
      title: 'Title',
      from: 'From',
      from_desc: `Examples: <kbd>/sections/&lcub;section&rcub;/&lcub;id&rcub;</kbd>, <kbd>/about</kbd> или <kbd>/lessons/course3</kbd>`,
      to: 'To',
      to_desc: `Examples: <kbd>/topics/&lcub;uuid&rcub;</kbd>, <kbd>/pages/about</kbd> или <kbd>/tags?id=3</kbd>`,
      code: 'Redirect Code',
      rank: 'Priority',
      active: 'Active',
    },
    file: {
      download: 'Download file ({size})',
    },
  },
  components: {
    table: {
      no_data: 'Nothing to display',
      no_results: 'Nothing found',
      records: 'No records | 1 record | {total} records',
      query: 'Search...',
      delete: {
        title: 'Confirmation required',
        confirm: 'Are you sure you want to delete this entry?',
      },
    },
    upload: {
      status_loading: 'Uploaded {uploaded} from {size}. There are {remaining} left at a speed of {speed}.',
      status_paused: 'Uploaded {uploaded} from {size}.',
      status_finished: 'Successfully uploaded {size} in {duration} at a speed of {speed}.',
      status_error: 'Unexpected error from the server: "{error}".',
    },
    comments: {
      title: 'Comments | 1 comment | {total} comments',
      latest: 'Online',
      info: {
        deleted: 'This message has been deleted',
        guest: 'You must be logged in to post comments',
        closed: 'Commenting on this topic has been disabled.',
        no_scope: "You don't have permission to comment",
        no_subscription: 'Only subscribers can comment.',
      },
      destroy: {
        title: 'Confirmation required',
        text: 'Are you sure you want to permanently delete this comment with all possible answers?',
      },
    },
    payment: {
      service: {
        title: 'Payment service',
        scan_qr: 'Scan the QR code to pay',
        no_subscription: `The service doesn't support automatic payments; you will have to renew your subscription manually.`,
      },
      subscription: {
        title: 'Purchase a subscription',
        price: 'Subscription price',
        change: 'Subscription change',
        upgrade: 'Need to pay extra',
        period: 'Subscription period',
        months: 'none | {amount} month | {amount} months',
        month_1: 'Billing once every month, next charge {date}.',
        month_3: 'Billing once every three months, next charge {date}.',
        month_6: 'Billing once every six months, next charge {date}.',
        month_12: 'Billing once a year, next charge {date}.',
        can_cancel: 'You can unsubscribe at any time.',
        free: 'Now you pay nothing and you can unsubscribe at any time.',
        level: {
          current: 'Current level',
          new: 'New level',
        },
        paid_until: 'Paid until',
        cancel_confirm: 'Are you sure you want to cancel your automatic subscription renewal?',
        cancel_change: 'Are you sure you want to cancel your subscription level change?',
      },
      topic: {
        title: 'Unlock this topic only',
        desc: 'One-time payment for the access to this topic only',
        price: 'You need to pay',
      },
      actions: {
        subscribe: 'Subscribe',
        subscription_pay: 'Pay for a subscription',
        subscription_change: 'Change subscription',
        subscription_cancel: 'Cancel subscription',
        topic_pay: 'Pay for this topic only',
        pay: 'Make a payment',
        check: 'Check the payment',
      },
      level: {
        subscribe: 'Subscribe',
        subscribed: 'Subscribed',
        active_until: 'Active until {date}',
        active_from: 'Active from {date}',
      },
      teaser: {
        required: 'Level required:',
        buy: 'Buy access',
        view: 'View',
      },
    },
  },
  pages: {
    index: 'Main',
    about: 'About',
    topics: 'Topics',
    admin: {
      title: 'Admin',
      users: 'Users',
      user_roles: 'Roles',
      videos: 'Videos',
      settings: 'Settings',
      levels: 'Subscriptions',
      topics: 'Topics',
      notifications: 'Notifications',
      pages: 'Pages',
      payments: 'Payments',
      redirects: 'Redirects',
    },
    user: {
      title: 'Account',
      profile: 'Profile',
      payments: 'Payments',
      subscription: 'Subscription',
    },
    search: {
      title: 'Search',
      placeholder: 'Search...',
      no_results: 'Nothing was found, unfortunately.',
      results: 'Nothing was found | Found {total} record | Found {total} records',
      sort: 'Sort:',
      sort_default: 'by relevancy',
      sort_date: 'by date',
    },
  },
  widgets: {
    comments: 'Online',
    levels: 'Subscriptions',
    tags: 'Tags',
    search: 'Search',
  },
  success: {
    profile: 'Profile saved successfully',
    login: 'Welcome!',
    register: 'An activation link has been sent to your email.',
    reset: 'The authorization link has been sent to your email.',
    logout: 'Goodbye!',
  },
  errors: {
    scope: 'There are not enough permissions for this action, "{scope}" is required',
    index: 'Go back to the main page',
    user: {
      no_username: 'Login is required',
      no_fullname: 'Tell us how to call you',
      no_email: 'Email is required',
      wrong_username: 'Incorrect login, only Latin letters and numbers can be used',
      username_exists: 'This login is already exists',
      email_exists: 'This email is already exists',
      inactive: 'This account is not active',
      blocked: 'This account is blocked',
      delete_own: 'You can not delete yourself',
    },
    user_role: {
      delete_own: 'You cannot delete your own group',
    },
    login: {
      wrong: 'Wrong login or password',
    },
    activate: {
      no_user: 'The user does not exist or did not reset the password',
      ttl: 'The link has expired',
      wrong: 'Incorrect temporary password',
    },
    video: {
      no_image: 'You forgot to upload an image for the video',
      pick_none: 'There are no uploaded videos yet',
      pick_not_found: 'Nothing found',
    },
    setting: {
      required: 'This setting is required',
    },
    upload: {
      no_filename: 'Could not get the name of file',
      no_size: 'Could not get the size of file',
      no_mime: 'Could not determine the type of uploaded file',
      wrong_mime: 'Invalid file type uploaded',
      missing_meta: 'Could not get upload metadata',
      wrong_offset: 'Invalid upload chunk offset',
      wrong_content: 'Invalid uploading encoding',
      write: 'File writing error',
      limit_size: 'File size too large to upload',
      limit_extension: 'This file type is not allowed for uploading',
    },
    level: {
      no_title: 'You forgot to specify the name of the subscription level',
      no_price: 'You must specify the price of the subscription',
      title_exists: 'This title already exists',
      price_exists: 'A level with this price has already been made',
    },
    topic: {
      title_exists: 'A topic with this name already exists',
      wrong_content: 'Could not process the content of topic',
    },
    comment: {
      no_content: 'You forgot to write a comment',
      wrong_content: 'Could not process the content of comment',
      edit_time: 'Editing time has expired',
      wrong_topic: 'Incorrect topic specified',
      wrong_parent: 'Incorrect parent comment specified',
      children_exists: "You can't edit this comment because it already has answers.",
    },
    page: {
      alias_exists: 'The page alias must be unique',
      title_exists: 'A page with this name already exists',
    },
    payment: {
      no_service: 'Could not find the specified payment service',
      wrong_service: 'Error when initializing the payment service',
      wrong_level: 'Could not load subscription level',
      delete_paid: 'Paid transactions cannot be deleted',
    },
    connection: {
      no_service: 'Could not find a service to connect to.',
    },
    reaction: {
      title_exists: 'A reaction with this name already exists',
    },
    tag: {
      no_title: 'You forgot to specify the tag',
      title_exists: 'This tag already exists',
    },
    not_ready: 'This function is not ready yet',
  },
}
