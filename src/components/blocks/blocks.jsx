import PropTypes from 'prop-types';
import classNames from 'classnames';
import React from 'react';
import Box from '../box/box.jsx';
import codeIcon from '../gui/icon--code.svg';
import styles from './blocks.css';

const BlocksComponent = props => {
    const {
        containerRef,
        dragOver,
        codeFormatLabel,
        onOpenCodeFormat,
        ...componentProps
    } = props;
    return (
        <Box
            className={classNames(styles.blocks, {
                [styles.dragOver]: dragOver
            })}
            {...componentProps}
            componentRef={containerRef}
        >
            <button
                className={styles.codeFormatButton}
                type="button"
                title={codeFormatLabel}
                aria-label={codeFormatLabel}
                onClick={onOpenCodeFormat}
            >
                <img
                    src={codeIcon}
                    alt=""
                    draggable={false}
                />
            </button>
        </Box>
    );
};
BlocksComponent.propTypes = {
    containerRef: PropTypes.func,
    dragOver: PropTypes.bool,
    codeFormatLabel: PropTypes.string,
    onOpenCodeFormat: PropTypes.func
};
export default BlocksComponent;
