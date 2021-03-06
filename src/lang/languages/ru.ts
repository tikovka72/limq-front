import {LangStruct} from "../langStruct";

export const langDict: LangStruct = {
    RegisterChannelsHeader: 'Каналы',
    ChannelCardActive: 'Активен',
    ChannelCardInactive: 'Неактивен',
    ChannelCardRead: 'R',
    ChannelCardWrite: 'W',
    ChannelCardAdd: 'Добавить канал',
    SomethingWentWrongError: 'Что-то пошло не так',
    ChannelSettingsMenuMainSettings: 'Главное',
    ChannelSettingsMenuKeys: 'Ключи',
    ChannelSettingsMenuMixins: 'Миксины',
    MixinsIn: 'Входящие',
    MixinsOut: 'Исходящие',
    WrongKeyError: 'Ключ невалиден',
    ReadKeyForm: 'Ключ на чтение',
    CreateMixinButton: 'Создать',
    YourMixinsHeader: 'Ваши миксины',
    ChannelNameForm: 'Название канала',
    ChannelNameTooLong: 'Название канала слишком длинное',
    RenameChannelButton: 'Переименовать',
    KeyNameTooLongError: 'Название ключа слишком длинное',
    KeyNameForm: 'Название ключа',
    KeyTypeReadForm: 'Чтение',
    KeyTypeWriteForm: 'Запись',
    KeyAllowInfoForm: 'Разрешить Info',
    KeyAllowMixinsForm: 'Разрешить создание миксинов',
    CreateKeyButton: 'Создать ключ',
    Paused: 'приостановлен',
    PauseKeyButton: 'Приостановить',
    ResumeKeyButton: 'Возобновить',
    DeleteKeyButton: 'Удалить',
    DeleteMixinConfirmQuestion: 'Удалить миксин?',
    DeleteMixinButton: 'Удалить',
    NoMixinInCard: 'У вас пока что нет входящих миксинов',
    NoMixinOutCard: 'У вас пока что нет исходящих миксинов',
    CreateChannelButton: 'Создать канал',
    LoginButton: 'Войти',
    ExitButton: 'Выйти',
    SettingsButton: 'Настройки',
    PasswordTooShortError: 'Пароль слишком короткий',
    InvalidEmailError: 'Невалидный адрес почты',
    EmailForm: 'Email',
    PasswordForm: 'Пароль',
    RememberMeForm: 'Запомнить меня',
    PasswordsNotMatchError: 'Пароли не совпадают',
    UsernameTooLongError: 'Имя слишком длинное',
    UsernameForm: 'Имя',
    PasswordAgainForm: 'Пароль еще раз',
    RegisterButton: 'Зарегистрироваться',
    UserSettingsMenuUsername: 'Сменить имя',
    UserSettingsMenuEmail: 'Сменить почту',
    UserSettingsMenuPassword: 'Сменить пароль',
    ChangeEmailButton: 'Сменить почту',
    RenameUserButton: 'Сменить имя',
    OldPasswordForm: 'Старый пароль',
    NewPasswordForm: 'Новый пароль',
    NewPasswordAgainForm: 'Новый пароль еще раз',
    ChangePasswordButton: 'Сменить пароль',
    CreateKeyHeader: "Создать ключ",
    RenameChannelHeader: "Сменить имя канала",
    CreateMixinHeader: "Создать миксин",
    YourKeysHeader: 'Ваши ключи',
    DeleteKeyConfirmQuestion: 'Удалить ключ?',
    RenameUserHeader: 'Сменить имя',
    ChangeEmailHeader: 'Сменить почту',
    ChangePasswordHeader: 'Сменить пароль',
    MainSettings: 'Настройки',
    ChangeLanguage: 'Язык',
    ChangeTheme: 'Тема',
    DarkTheme: 'Темная',
    LightTheme: 'Светлая',
    SystemTheme: 'Системная',
    English: 'English',
    Russian: 'Русский',

    EnterEmail: 'Введите email',
    EnterPassword: 'Введите пароль',
    EnterUsername: 'Введите имя',
    EnterPasswordAgain: 'Введите пароль еще раз',
    EnterOldPassword: 'Введите старый пароль',
    EnterNewPassword: 'Введите новый пароль',
    EnterNewPasswordAgain: 'Введите новый пароль еще раз',
    EnterKeyName: 'Введите название ключа',
    EnterReadKey: 'Введите ключ на чтение',
    EnterChannelName: 'Введите название канала',
    LoginHeader: 'Вход по email',
    RegisterHeader: 'Регистрация по email',
    UserSettingsHeader: 'Настройки пользователя',
    ChannelSettingsHeader: 'Настройки канала',
    CreateChannelHeader: 'Создать канал',

    ChannelNameError: 'Невалидное название канала',
    ChannelNotExistError: 'Канал не найден',
    NotChannelOwnerError: 'Нет доступа к этому каналу',

    KeyNameError: 'Название ключа указано неверно. Проверьте правильность данных и повторите попытку',
    KeyPermissionsError: 'Права доступа для ключа указаны неверно. Проверьте правильность данных и повторите попытку',
    BadChannelIdError: 'Неправильный ID канала',
    BadKeyError: 'Ключ указан неверно. Проверьте правильность данных и повторите попытку',

    AlreadyMixedError: 'Вы уже подписаны на данный канал',
    BadThreadError: 'Канал не найден',
    BadKeyTypeError: 'Данный ключ не имеет прав на чтение',
    CircleMixinError: 'Обнаружен рекурсивный миксин. Сообщения, которые попадают в ваш канал, уже попадают в канал назначения',
    SelfMixinError: 'Нельзя подписаться на этот же канал',

    EmailError: 'E-mail указан неверно. Проверьте правильность данных и повторите попытку',
    UsernameError: 'Имя указано неверно. Проверьте правильность данных и повторите попытку',
    PasswordError: 'Пароль указан неверно. Проверьте правильность данных и повторите попытку',
    EmailExistError: 'Пользователь с таким e-mail уже существует',
    BadUserError: 'Пользователь не найден',
    UnknownError: 'Неизвестная ошибка',

    GreetingHeader: 'Ознакомьтесь с функциями LiMQ',
    GreetingText: 'LiMQ — это мощный облачный SaaS брокер сообщений',
    LearnMoreButton: 'Узнать больше',
    TrySandbox: 'Попробуйте функции LiMQ в песочнице'
}
