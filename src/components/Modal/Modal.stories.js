import React, {useState} from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Modal from './Modal';

export default {
    title: 'Components/FullscreenModal',
    Component: Modal
}

const ShowModal = () => {
    const [isShow, setisShow] = useState(false);

    const handleClick = () => {
        setisShow(!isShow);
    }

    return (
        <>
            <Button onClick={() => handleClick()} variant="primary" size="lg">Open Modal</Button>
            <div className={`modal ${isShow ? 'active' : ''}`}>
                <div className="modal__content">
                    <div className="close__modal">
                        <button className="x-close" onClick={handleClick}>
                            <div style={{width: '24px', height: '24px'}}>
                                <Icon id={'delete'} strokeWidth={1} size={24} />
                            </div>
                        </button>
                    </div>
                    <p className="modal__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="modal__buttons">
                        <Button onClick={handleClick} variant="secondary" disabled={false} size="lg">Cancel</Button>
                        <Button onClick={handleClick} variant="danger" disabled={false} size="lg">OK</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

const Template = (args) => <Modal {...args} />

export const FullscreenModal = Template.bind({});

FullscreenModal.args = {
    children: <ShowModal />,
}
