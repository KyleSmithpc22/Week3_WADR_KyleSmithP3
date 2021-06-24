import React, { useState,useEffect } from 'react';


export const EditRoomForm = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState('');
    const {selectedRoom} = props;

    useEffect(() => {
      setName(selectedRoom.name); 
      setArea(selectedRoom.area); 
    }, [selectedRoom] )

    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ? int : '');
    }

    const onSubmit = (e) => {

        e.preventDefault();
        if (name && area) {

            console.log("name: " + name)
            console.log("area: " + area)
            props.onSubmit(name,area);

            setName('');
            setArea('');

            console.log("name: " + name)
            console.log("area: " + area)
        } else {
            console.log('invalid input');
        }
    };
        
    return (
        
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type='text'
                    placeholder='name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    type='text'
                    placeholder='area'
                    onChange={handleAreaInput}
                    value={area}
                />
                <button type='submit'>Edit Room</button>
            </form>
        </div>
    )
};