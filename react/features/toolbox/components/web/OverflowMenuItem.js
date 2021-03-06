// @flow

import Tooltip from '@atlaskit/tooltip';
import React, { Component } from 'react';

/**
 * The type of the React {@code Component} props of {@link OverflowMenuItem}.
 */
type Props = {

    /**
     * A succinct description of what the item does. Used by accessibility tools
     * and torture tests.
     */
    accessibilityLabel: string,

    /**
     * Whether menu item is disabled or not.
     */
    disabled: boolean,

    /**
     * A React Element to display at the end of {@code OverflowMenuItem}.
     */
    elementAfter?: React$Node,

    /**
     * The icon class to use for displaying an icon before the link text.
     */
    icon: string,

    /**
     * The callback to invoke when {@code OverflowMenuItem} is clicked.
     */
    onClick: Function,

    /**
     * The text to display in the {@code OverflowMenuItem}.
     */
    text: string,

    /**
     * The text to display in the tooltip.
     */
    tooltip?: string,

    /**
     * From which direction the tooltip should appear, relative to the button.
     */
    tooltipPosition: string
};

/**
 * A React {@code Component} for displaying a link to interact with other
 * features of the application.
 *
 * @extends Component
 */
class OverflowMenuItem extends Component<Props> {
    /**
     * Default values for {@code OverflowMenuItem} component's properties.
     *
     * @static
     */
    static defaultProps = {
        tooltipPosition: 'left',
        disabled: false
    };

    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        let className = 'overflow-menu-item';

        className += this.props.disabled ? ' disabled' : '';

        return (
            <li
                aria-label = { this.props.accessibilityLabel }
                className = { className }
                onClick = { this.props.disabled ? null : this.props.onClick }>
                <span className = 'overflow-menu-item-icon'>
                    <i className = { this.props.icon } />
                </span>
                { this._renderText() }
                {
                    this.props.elementAfter || null
                }
            </li>
        );
    }

    /**
     * Renders the text label to display in the {@code OverflowMenuItem}.
     *
     * @private
     * @returns {ReactElement}
     */
    _renderText() {
        const textElement = ( // eslint-disable-line no-extra-parens
            <span className = 'overflow-menu-item-text'>
                { this.props.text }
            </span>
        );

        if (this.props.tooltip) {
            return (
                <Tooltip
                    content = { this.props.tooltip }
                    position = { this.props.tooltipPosition }>
                    { textElement }
                </Tooltip>
            );
        }

        return textElement;
    }
}

export default OverflowMenuItem;
