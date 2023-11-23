import { inject, injectable } from '@theia/core/shared/inversify';
import { MenuModelRegistry } from '@theia/core';
import { BasicWidgetWidget } from './basic-widget-widget';
import { AbstractViewContribution } from '@theia/core/lib/browser';
import { Command, CommandRegistry } from '@theia/core/lib/common/command';

// additional imports needed for the FrontendApplication (see onStart)
import { FrontendApplication } from '@theia/core/lib/browser';
import { FrontendApplicationStateService } from '@theia/core/lib/browser/frontend-application-state';


export const BasicWidgetCommand: Command = { id: 'basic-widget:command' };

@injectable()
export class BasicWidgetContribution extends AbstractViewContribution<BasicWidgetWidget> {

    // use the frontend application state to open the widget on startup
    @inject(FrontendApplicationStateService)
    protected readonly stateService: FrontendApplicationStateService;


    /**
     * `AbstractViewContribution` handles the creation and registering
     *  of the widget including commands, menus, and keybindings.
     * 
     * We can pass `defaultWidgetOptions` which define widget properties such as 
     * its location `area` (`main`, `left`, `right`, `bottom`), `mode`, and `ref`.
     * 
     */
    constructor() {
        super({
            widgetId: BasicWidgetWidget.ID,
            widgetName: BasicWidgetWidget.LABEL,
            defaultWidgetOptions: { area: 'right' },
            toggleCommandId: BasicWidgetCommand.id
        });
    }

    /**
     * Example command registration to open the widget from the menu, and quick-open.
     * For a simpler use case, it is possible to simply call:
     ```ts
        super.registerCommands(commands)
     ```
     *
     * For more flexibility, we can pass `OpenViewArguments` which define 
     * options on how to handle opening the widget:
     * 
     ```ts
        toggle?: boolean
        activate?: boolean;
        reveal?: boolean;
     ```
     *
     * @param commands
     */
    registerCommands(commands: CommandRegistry): void {
        commands.registerCommand(BasicWidgetCommand, {
            execute: () => super.openView({ activate: true, reveal: true }) // was activate false
        });
    }

    /**
     *  NEW CODE ADDED BY SM 22nov23
     *  ----------------------------------------------------------------------
     *  try to open the basic-widget (this widget!) when layout is initialized
     *  This technique is borrowed from the coffee editor example IDE
     * 
     * To do this we need to inject a FrontendApplication
     */
    async onStart(app: FrontendApplication): Promise<void> {
        this.stateService.reachedState('ready').then(a => this.openView({ reveal: true }));
    }

    /**
     * Example menu registration to contribute a menu item used to open the widget.
     * Default location when extending the `AbstractViewContribution` is the `View` main-menu item.
     * 
     * We can however define new menu path locations in the following way:
     ```ts
        menus.registerMenuAction(CommonMenus.HELP, {
            commandId: 'id',
            label: 'label'
        });
     ```
     * 
     * @param menus
     */
    registerMenus(menus: MenuModelRegistry): void {
        super.registerMenus(menus);
    }
}
