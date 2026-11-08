import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, FormattedMessage, injectIntl, intlShape} from 'react-intl';
import bindAll from 'lodash.bindall';

import Modal from '../../containers/modal.jsx';
import styles from './xtremcode-editor.css';

const messages = defineMessages({
    title: {
        defaultMessage: 'XtremCode format',
        description: 'Title of the editable XtremCode workspace format',
        id: 'tw.xtremCodeEditor.title'
    },
    sourceLabel: {
        defaultMessage: 'Workspace source',
        description: 'Accessible label of the XtremCode workspace source editor',
        id: 'tw.xtremCodeEditor.sourceLabel'
    },
    cancel: {
        defaultMessage: 'Cancel',
        description: 'Close the XtremCode format editor without applying changes',
        id: 'tw.xtremCodeEditor.cancel'
    },
    apply: {
        defaultMessage: 'Apply to blocks',
        description: 'Apply the XtremCode format to the Blockly workspace',
        id: 'tw.xtremCodeEditor.apply'
    }
});

class XtremCodeEditor extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleApply',
            'handleChange'
        ]);
        this.state = {
            error: null,
            source: props.source
        };
    }
    handleChange (event) {
        this.setState({
            error: null,
            source: event.target.value
        });
    }
    handleApply () {
        try {
            this.props.onApply(this.state.source);
        } catch (error) {
            this.setState({
                error: error && error.message ? error.message : String(error)
            });
        }
    }
    render () {
        const {intl, onClose} = this.props;
        return (
            <Modal
                className={styles.modalContent}
                contentLabel={intl.formatMessage(messages.title)}
                id="xtremCodeEditor"
                onRequestClose={onClose}
            >
                <div className={styles.body}>
                    <label htmlFor="xtremcode-workspace-source">
                        <FormattedMessage {...messages.sourceLabel} />
                    </label>
                    <textarea
                        autoCapitalize="off"
                        autoComplete="off"
                        autoCorrect="off"
                        className={styles.source}
                        id="xtremcode-workspace-source"
                        spellCheck={false}
                        value={this.state.source}
                        onChange={this.handleChange}
                    />
                    {this.state.error ? (
                        <div
                            className={styles.error}
                            role="alert"
                        >
                            {this.state.error}
                        </div>
                    ) : null}
                    <div className={styles.actions}>
                        <button
                            className={styles.cancelButton}
                            type="button"
                            onClick={onClose}
                        >
                            <FormattedMessage {...messages.cancel} />
                        </button>
                        <button
                            className={styles.applyButton}
                            type="button"
                            onClick={this.handleApply}
                        >
                            <FormattedMessage {...messages.apply} />
                        </button>
                    </div>
                </div>
            </Modal>
        );
    }
}

XtremCodeEditor.propTypes = {
    intl: intlShape.isRequired,
    onApply: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    source: PropTypes.string.isRequired
};

export default injectIntl(XtremCodeEditor);
