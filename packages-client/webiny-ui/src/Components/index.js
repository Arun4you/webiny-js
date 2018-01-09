import {Webiny} from 'webiny-client';

export default () => {
    Webiny.registerModule(
        new Webiny.Module('Alert', () => import('./Alert')),
        new Webiny.Module('Animate', () => import('./Animate')),
        new Webiny.Module('Avatar', () => import('./Avatar')),
        new Webiny.Module('Button', () => import('./Button')),
        new Webiny.Module('ButtonGroup', () => import('./ButtonGroup')),
        new Webiny.Module('Carousel', () => import('./Carousel')),
        new Webiny.Module('ChangeConfirm', () => import('./ChangeConfirm')),
        new Webiny.Module('Checkbox', () => import('./Checkbox')),
        new Webiny.Module('CheckboxGroup', () => import('./CheckboxGroup')),
        new Webiny.Module('ClickConfirm', () => import('./ClickConfirm')),
        new Webiny.Module('ClickSuccess', () => import('./ClickSuccess')),
        new Webiny.Module('CodeEditor', () => import('./CodeEditor')),
        new Webiny.Module('CodeHighlight', () => import('./CodeHighlight')),
        new Webiny.Module('Copy', () => import('./Copy')),
        new Webiny.Module('Cropper', () => import('./Cropper')),
        new Webiny.Module('Data', () => import('./Data')),
        new Webiny.Module('Date', () => import('./Date')),
        new Webiny.Module('DateRange', () => import('./DateRange')),
        new Webiny.Module('DateTime', () => import('./DateTime')),
        new Webiny.Module('DelayedOnChange', () => import('./DelayedOnChange')),
        new Webiny.Module('DownloadLink', () => import('./DownloadLink')),
        new Webiny.Module('Downloader', () => import('./Downloader')),
        new Webiny.Module('Draft', () => import('./Draft')),
        new Webiny.Module('Dropdown', () => import('./Dropdown')),
        new Webiny.Module('Dynamic', () => import('./Dynamic')),
        new Webiny.Module('Email', () => import('./Email')),
        new Webiny.Module('ExpandableList', () => import('./ExpandableList')),
        new Webiny.Module('Fieldset', () => import('./Fieldset')),
        new Webiny.Module('File', () => import('./File')),
        new Webiny.Module('FileReader', () => import('./FileReader')),
        new Webiny.Module('Filters', () => import('./Filters')),
        new Webiny.Module('Form', () => import('./Form')),
        new Webiny.Module('FormGroup', () => import('./FormGroup')),
        new Webiny.Module('Gallery', () => import('./Gallery')),
        new Webiny.Module('GoogleMap', () => import('./GoogleMap')),
        new Webiny.Module('Gravatar', () => import('./Gravatar')),
        new Webiny.Module('Grid', () => import('./Grid')),
        new Webiny.Module('Growl', () => import('./Growl')),
        new Webiny.Module('HtmlEditor', () => import('./HtmlEditor')),
        new Webiny.Module('Icon', () => import('./Icon')),
        new Webiny.Module('IconPicker', () => import('./IconPicker')),
        new Webiny.Module('Image', () => import('./Image')),
        new Webiny.Module('Input', () => import('./Input')),
        new Webiny.Module('Label', () => import('./Label')),
        new Webiny.Module('LazyImage', () => import('./LazyImage')),
        new Webiny.Module('Link', () => import('./Link')),
        new Webiny.Module('List', () => import('./List')),
        new Webiny.Module('Loader', () => import('./Loader')),
        new Webiny.Module('Logic', () => import('./Logic')),
        new Webiny.Module('MarkdownEditor', () => import('./MarkdownEditor')),
        new Webiny.Module('Modal', () => import('./Modal')),
        new Webiny.Module('Panel', () => import('./Panel')),
        new Webiny.Module('Password', () => import('./Password')),
        new Webiny.Module('Popover', () => import('./Popover')),
        new Webiny.Module('Progress', () => import('./Progress')),
        new Webiny.Module('RadioGroup', () => import('./RadioGroup')),
        new Webiny.Module('Search', () => import('./Search')),
        new Webiny.Module('Section', () => import('./Section')),
        new Webiny.Module('Select', () => import('./Select')),
        new Webiny.Module('Settings', () => import('./Settings')),
        new Webiny.Module('Switch', () => import('./Switch')),
        new Webiny.Module('Tabs', () => import('./Tabs')),
        new Webiny.Module('Tags', () => import('./Tags')),
        new Webiny.Module('Textarea', () => import('./Textarea')),
        new Webiny.Module('Tile', () => import('./Tile')),
        new Webiny.Module('Time', () => import('./Time')),
        new Webiny.Module('Tooltip', () => import('./Tooltip')),
        new Webiny.Module('View', () => import('./View')),
        new Webiny.Module('ViewSwitcher', () => import('./ViewSwitcher')),
        new Webiny.Module('Wizard', () => import('./Wizard'))
    );
};