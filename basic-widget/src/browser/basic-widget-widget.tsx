import * as React from 'react';
import { injectable, postConstruct, inject } from '@theia/core/shared/inversify';
import { AlertMessage } from '@theia/core/lib/browser/widgets/alert-message';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import { MessageService } from '@theia/core';
import { Message } from '@theia/core/lib/browser';

@injectable()
export class BasicWidgetWidget extends ReactWidget {

    // uniquely identify the widget, e.g. to open it via the WidgetManager.
    static readonly ID = 'basic-widget:widget';
    // Shown in the tab when the widget is open.
    static readonly LABEL = 'Basic Widget';

    @inject(MessageService)
    protected readonly messageService!: MessageService;

    // Initialise the widget - this could be done inline but the
    // generator calls a doInit function.
    @postConstruct()
    protected init(): void {
        this.doInit()
    }

    protected async doInit(): Promise <void> {
        this.id = BasicWidgetWidget.ID;
        this.title.label = BasicWidgetWidget.LABEL;
        this.title.caption = BasicWidgetWidget.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-cube'; // was fa-window-maximize. 
        this.update();
    }

    render(): React.ReactElement {
        const header = `This is a sample widget which simply calls the messageService
        in order to display an info message to end users.`;
        return <div id='widget-container'>
            <AlertMessage type='INFO' header={header} />
            <button id='displayMessageButton' className='theia-button secondary' title='Display Message' onClick={_a => this.displayMessage()}>Display Message</button>
        </div>
    }

    protected displayMessage(): void {
        this.messageService.info('Congratulations: BasicWidget Widget Successfully Created!');
    }

    // when the widget is activated this handler sets the focus to the display
    // message button.. widgets are implemented using phosphor.js documentation
    // for this method is here:
    //  https://phosphorjs.github.io/phosphor/api/widgets/classes/widget.html#onactivaterequest
    protected onActivateRequest(msg: Message): void {
        super.onActivateRequest(msg);
        const htmlElement = document.getElementById('displayMessageButton');
        if (htmlElement) {
            htmlElement.focus();
        }
    }

}
