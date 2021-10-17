export const TYPE_NOTIFICATION = {
	ERROR: 'error',
	WARNING: 'warning',
	INFO: 'info',
	SUCCESSFULL: 'successful',
};

export const SIZE_CONTROL = {
	LG: 'lg',
	MD: 'md',
	SM: 'sm',
	XS: 'xs',
};

export const STYLE_CONTROL = {
	PRIMARY: 'primary',
	SECONDARY: 'secondary',
};

export const STYLE_STATUS_CONTROL = {
	DISABLED: 'disabled',
	READ_ONLY: 'readOnly',
	REQUIRED: 'required',
};

export const ACTION_ICONS = [
	'search',
	'home',
	'account_circle',
	'settings',
	'done',
	'info',
	'check_circle',
	'delete',
	'logout',
	'description',
	'lock',
	'help',
	'manage_accounts',
	'filter_alt',
	'event',
	'login',
	'list',
	'lightbulb',
	'autorenew',
	'print',
	'tab',
	'zoom_in',
	'zoom_out',
];

export const ALERT_ICONS = [
	'add_alert',
	'error',
	'notification_important',
	'warning',
];

export const AUDIO_AND_VIDEO_ICONS = [
	'play_arrow',
	'videocam',
	'mic',
	'volume_up',
	'pause',
	'volume_off',
	'replay',
	'skip_next',
	'stop',
	'movie',

	'skip_previous',
	'loop',
	'fast_forward',
	'mic_off',
	'video_call',
	'repeat',
	'volume_mute',
	'fast_rewind',
	'volume_down',
	'repeat_one',
];

export const COMMUNICATION_ICONS = [
	'email',
	'location_on',
	'call',
	'chat',
	'list_alt',
	'alternate_email',
	'qr_code_2',
	'message',
	'sentiment_satisfied_alt',
	'comment',

	'live_help',
	'rss_feed',
	'import_export',
	'mark_email_read',
	'stay_current_portrait',
	'duo',
	'key',
	'desktop_access_disabled',
];

export const CONTENT_ICONS = [
	'add',
	'send',
	'content_copy',
	'clear',
	'mail',
	'save',
	'filter_list',
	'remove',
	'sort',
	'inventory',

	'create',
	'flag',
	'reply',
	'push_pin',
	'block',
	'calculate',
	'report',
	'archive',
	'select_all',
	'content_paste_go',
];

export const DIVICE_ICONS = [
	'password',
	'quiz',
	'storage',
	'pin',
	'bluetooth',
	'access_time',
	'sd_storage',
	'restart_alt',
];

export const EDITOR_ICONS = [
	'attach_money',
	'mode_edit',
	'format_list_bulleted',
	'attach_file',
	'edit_note',
	'checklist',
	'format_list_numbered',
	'insert_photo',
	'format_bold',
	'insert_emoticon',

	'table_rows',
	'format_italic',
	'format_align_left',
	'format_underlined',
	'format_align_center',
	'format_align_right',
	'format_align_justify',
];

export const FILE_ICONS = [
	'file_download',
	'file_upload',
	'folder',
	'grid_view',
	'upload_file',
	'cloud_upload',
	'cloud_download',
	'folder_open',
	'cloud',
	'create_new_folder',
];

export const HARDWARE_ICONS = [
	'keyboard_arrow_down',
	'smartphone',
	'phone_iphone',
	'keyboard_arrow_right',
	'computer',
	'desktop_windows',
	'phone_android',
	'keyboard_backspace',
	'keyboard_arrow_up',
	'keyboard_arrow_left',

	'keyboard',
	'headphones',
	'tv',
	'keyboard_return',
	'headset_mic',
	'mouse',
	'keyboard_voice',
	'tablet_mac',
	'watch',
	'keyboard_double_arrow_left',
	'keyboard_double_arrow_right',
];

export const IMAGE_ICONS = [
	'photo_camera',
	'image',
	'timer',
	'camera',
	'crop',
	'broken_image',
	'flip_camera_ios',
	'movie_filter',
	'crop_rotate',
];

export const NAVIGATION_ICONS = [
	'close',
	'menu',
	'expand_more',
	'expand_less',
	'arrow_back',
	'arrow_forward',
	'chevron_right',
	'chevron_left',
	'arrow_drop_down',
	'arrow_drop_up',

	'first_page',
	'last_page',
	'campaign',
	'apps',
	'refresh',
	'unfold_more',
	'unfold_less',
	'fullscreen_exit',
	'fullscreen',
	'more_vert',
	'more_horiz',
];

export const NOTIFICATION_ICONS = [
	'support_agent',
	'wifi',
	'sync',
	'event_available',
	'priority_high',
	'event_note',
	'sync_problem',
	'vpn_lock',
	'do_disturb',
	'voice_chat',
];

export const SOCIAL_ICONS = [
	'person',
	'notifications',
	'groups',
	'group',
	'share',
	'person_add',
	'public',
	'notifications_active',
	'whatsapp',
	'woman',

	'man',
	'recycling',
	'telegram',
	'adobe',
	'snapchat',
	'apple',
	'thumb_up_alt',
	'thumb_down_alt',
	'notifications_paused',
	'tiktok',
];

export const ICONS = ACTION_ICONS.concat(ALERT_ICONS)
	.concat(AUDIO_AND_VIDEO_ICONS)
	.concat(COMMUNICATION_ICONS)
	.concat(CONTENT_ICONS)
	.concat(DIVICE_ICONS)
	.concat(EDITOR_ICONS)
	.concat(FILE_ICONS)
	.concat(HARDWARE_ICONS)
	.concat(IMAGE_ICONS)
	.concat(NAVIGATION_ICONS)
	.concat(NOTIFICATION_ICONS)
	.concat(SOCIAL_ICONS);

const CONSTANT = {
	TYPE_NOTIFICATION,
	SIZE_CONTROL,
	STYLE_CONTROL,
	STYLE_STATUS_CONTROL,

	ICONS,
	ACTION_ICONS,
	ALERT_ICONS,
	AUDIO_AND_VIDEO_ICONS,
	COMMUNICATION_ICONS,
	CONTENT_ICONS,
	DIVICE_ICONS,
	EDITOR_ICONS,
	FILE_ICONS,
	HARDWARE_ICONS,
	IMAGE_ICONS,
	NAVIGATION_ICONS,
	NOTIFICATION_ICONS,
	SOCIAL_ICONS,
};

export default CONSTANT;
