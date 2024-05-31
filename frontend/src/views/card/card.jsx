import React, { useContext, useEffect, useState } from 'react';
import { apiRequest } from '../../utils/utils.js';
import styled from 'styled-components';
import { ReloadContext } from '../home/Home.jsx';

// Fait en sorte que la card soit plus jolie
const CardContainer = styled.div`
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 15px;
    margin: 10px;
`;

const Title = styled.h2`
    font-size: 25px;
    margin-bottom: 10px;
`;

const InfoDate = styled.p`
    font-size: 10px;
    italic: 10px;
`;

const Status = styled.p`
    display: flex;
    justify-content: flex-end;
`;

const Comment = styled.p`
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

// change le design des boutons
const Action = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    button {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 5px 10px;
        cursor: pointer;
    }    
    button:last-child {
        background-color: #FF6961;
    }
`;

const Edit = styled.div`
    margin: 10px;
    padding: 10px;
    input {
        margin: 10px;
        padding: 5px;
    }
    button {
        background-color: #f1f1f1;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 5px 10px;
        cursor: pointer;
    }    
`;

const Card = ({ data }) => {
    const [ title, setTitle ] = useState(data.title);
    const [ comment, setComment ] = useState(data.comment);
    const { reload, setReload } = useContext(ReloadContext);
    const [ status, setStatus ] = useState(data.status);
    const [ edit, setEdit ] = useState(false);

    const handleModify = (e) => {
        setEdit(true)
    }
    
    const modify = (e) => {
        const title = e.target[0].value;
        const comment = e.target[1].value;
        apiRequest('todolist/' + data?.id, 'PUT', { title, comment});
        setReload(!reload);
        setEdit(false);
    }

    const handleDelete = () => {
        apiRequest('todolist/' + data?.id, 'DELETE');
        setReload(!reload);
    }

    const handleModifyStatus = () => {
        setStatus(!status);
        apiRequest('todolist/status/' + data?.id, 'PUT', { ...data, status:!status });
        setReload(!reload);
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    return (
        <CardContainer>
            { edit ? 
                <Edit>
                    <form onSubmit={(e) => modify(e)}>
                        <input type="text" value={title} onChange={handleTitleChange} placeholder="Task example"/>
                        <input type="text" value={comment} onChange={handleCommentChange} placeholder="Content example"/>
                        <button >Valider</button>
                        <button onClick={() => {}} >Annuler</button>
                    </form>
                </Edit> 
                : 
                <div>
                    <Title>{data.title}</Title>
                    <InfoDate>{"créé le " + new Date(data.createdAt).toLocaleDateString()}</InfoDate>
                    <Status>
                        <input type="checkbox" onChange={handleModifyStatus} checked={status} />
                    </Status>
                    <Comment>{data.comment}</Comment>
                    <Action>
                        <button onClick={handleModify}>Modifier</button>
                        <button onClick={handleDelete}>Supprimer</button>
                    </Action>
                </div>
            }
        </CardContainer>
    );
};

export default Card;