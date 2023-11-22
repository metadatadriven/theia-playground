import { ContainerModule } from '@theia/core/shared/inversify';
import { BasicWidgetWidget } from './basic-widget-widget';
import { BasicWidgetContribution } from './basic-widget-contribution';
import { bindViewContribution, FrontendApplicationContribution, WidgetFactory } from '@theia/core/lib/browser';

import '../../src/browser/style/index.css';

export default new ContainerModule(bind => {
    bindViewContribution(bind, BasicWidgetContribution);
    bind(FrontendApplicationContribution).toService(BasicWidgetContribution);
    bind(BasicWidgetWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: BasicWidgetWidget.ID,
        createWidget: () => ctx.container.get<BasicWidgetWidget>(BasicWidgetWidget)
    })).inSingletonScope();
});
