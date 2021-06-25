import { Component, ReactNode, createElement, ReactFragment } from "react";

export interface EmptyListComponentProps {
    listClass: string;
    includeParent: boolean;
    placeholder: ReactFragment;
}

export class EmptyListPlaceholderComponent extends Component<EmptyListComponentProps> {
    observer!: MutationObserver;
    componentId = "EmptyList" + Math.floor(Math.random() * 1000000);

    componentDidMount(): void {
        const listView = document.querySelector("." + this.props.listClass) as HTMLElement;
        const element = this.props.includeParent ? listView.parentElement : listView;
        if (!element) {
            return;
        }
        const displayType = element.style.display;
        element.style.display = "none";
        const config = { attributes: true, childList: true, subtree: true };
        const callback = (mutationsList: any): void => {
            for (const mutation of mutationsList) {
                if (mutation.type === "childList") {
                    const placeholder = document.getElementById(this.componentId) as HTMLElement;
                    if (this.displayPlaceholder(listView)) {
                        placeholder.style.display = "block";
                        element.style.display = "none";
                    } else {
                        placeholder.style.display = "none";
                        element.style.display = displayType;
                    }
                }
            }
        };
        this.observer = new MutationObserver(callback);
        this.observer.observe(element, config);
    }

    displayPlaceholder(listView: HTMLElement): boolean {
        if (listView.classList.contains("mx-listview") && listView?.querySelector(".mx-listview-empty")) {
            return true;
        }
        if (listView.classList.contains("mx-templategrid") && listView?.querySelector(".mx-templategrid-empty")) {
            return true;
        }
        return false;
    }

    componentWillUnmount(): void {
        if (this.observer) {
            this.observer.disconnect();
        }
    }

    render(): ReactNode {
        return <div id={this.componentId}>{this.props.placeholder}</div>;
    }
}