import magitIcon from '@magit/magit-logo/blob/master/images/icon/80x80/magit-icon-80x80px.svg';

export const DEFAULT_LANGUAGE = 'emacs-lisp';

export const SUPPORTED_LANGUAGES = {
  [DEFAULT_LANGUAGE]: ['emacs']
};

export const SUPPORTED_TOOLS = {
  emacs: {
    name: 'Emacs',
    tag: 'emacs',
    icon: 'magitIcon'
  }
};

export const USAGE_THRESHOLD = 0.05;
export const HUNDRED_PERCENT = 100;
export const MAX_DECIMALS = 2;
export const MIN_VALID_HTTP_STATUS = 200;
export const MAX_VALID_HTTP_STATUS = 299;
export const DEFAULT_LANGUAGE_SET = {[DEFAULT_LANGUAGE]: HUNDRED_PERCENT};

export const CLONE_PROTOCOLS = {
  HTTPS: 'HTTPS',
  SSH: 'SSH'
};
