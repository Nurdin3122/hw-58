import React from 'react';

interface Props extends React.PropsWithChildren{
    type: 'primary' | 'success' | 'danger' | 'warning';
    onDismiss?: () => void
}

const Alert:React.FC<Props> = ({type,onDismiss,children}) => {
    const alert = `alert alert-${type}`;
    return (
        <div className={alert}>
            {children}
            {onDismiss ? (
                <button type="button" className="btn btn-close" onClick={onDismiss}></button>
            ) : undefined}
        </div>
    );
};

export default Alert;