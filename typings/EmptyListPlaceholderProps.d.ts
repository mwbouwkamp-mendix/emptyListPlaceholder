/**
 * This file was generated from EmptyListPlaceholder.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";

export type WidgetModeEnum = "emptylist" | "notemptylist";

export interface EmptyListPlaceholderContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    widgetMode: WidgetModeEnum;
    listClass: string;
    includeParent: boolean;
    placeholder: ReactNode;
}

export interface EmptyListPlaceholderPreviewProps {
    class: string;
    style: string;
    widgetMode: WidgetModeEnum;
    listClass: string;
    includeParent: boolean;
    placeholder: { widgetCount: number; renderer: ComponentType };
}
