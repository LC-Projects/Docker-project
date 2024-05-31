import React, { useState, useEffect, createContext } from 'react';
import Card from '../card/card';
import { apiRequest } from '../../utils/utils.js';
import styled from 'styled-components';

const HomeContainer = styled.div`
    align-items: center;
    display: grid;
    grid-template-areas: 
    "header" 
    "body" 
    "footer";
    
    height: 100vh;
`;

const HeaderContainer = styled.div`
    grid-area: header;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
    background-color: grey;
    height: 10vh;
`;

const BodyContainer = styled.div`
    grid-area: body;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 80vh;
    overflow-y: auto;
`;

const FormContainer = styled.div`
    padding: 30px;
    form {
        border: 2px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    input {
        margin: 10px;
        padding: 5px;
    }
    button {
        background-color: #B5E61D;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 5px 10px;
        cursor: pointer;
    }    
`;

const FooterContainer = styled.div`
    grid-area: footer;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
    background-color: grey;
    height: 10vh;
`;
const ReloadContext = createContext({
    reload: false,
    setReload: () => {}
});
export { ReloadContext };

const Home = () => {
    const [reload, setReload] = useState(false);
    const [Cards, setCards] = useState([]);

    useEffect(() => {
        apiRequest('todolist', 'GET').then(data => {
            setCards(data);
        });
    }
    , [Cards, reload]);

    const handleCreate = (e) => {
        e.preventDefault();
        const title = e.target[0].value;
        const comment = e.target[1].value;
        if (!title || !comment) return alert('Please fill all fields');
        apiRequest('todolist', 'POST', { title, comment, status: 0 })
        e.target[0].value = '';
        e.target[1].value = '';
        setReload(!reload);
    }
    return (
        <ReloadContext.Provider value={{reload, setReload}}>
            <HomeContainer>
                {/* Header */}
                <HeaderContainer>
                    <p>Website powered by <strong>Vite + React</strong><strong> & AdmonisJS</strong></p>
                </HeaderContainer>
                {/* Body */}
                <BodyContainer>
                    <div>
                        {Cards.map(card => <Card key={card.id} data={card} />)}
                    </div>
                    <FormContainer>
                        <form onSubmit={(e) => handleCreate(e)}>
                            <input type="text" placeholder="Task example" />
                            <input type="text" placeholder="Content example" />
                            <button type='submit'>Add a new task</button>
                        </form>
                    </FormContainer>
                </BodyContainer>
                {/* Footer */}
                <FooterContainer>
                    <p>© 2024 TodoList Website</p><br></br>
                    <p>by Jonathan MARTIN, IT student for <a href='https://www.livecampus.fr/'>LiveCampus</a></p>
                </FooterContainer>
            </HomeContainer>
        </ReloadContext.Provider>
    );
};

export default Home;