import './style.css';
import { useState, useEffect, useMemo } from 'react';

import useHash from '../hooks/useHash.jsx';
import Group from './Group.jsx';

const App = props => {
    
    const [groups, setGroups] = useState([]);

  
    useEffect(()=>{
        const fetchGroups = async () => {
            try {
                const response = await fetch('https://dogapi.dog/api/v2/groups');
                const json = await response.json();

               
                setGroups(json.data.map(group => ({
                    id: group.id,
                    name: group.attributes.name,
                    breeds: group.relationships.breeds.data
                })));
            } catch (error) {
                console.error('Could not fetch dog groups:', error);
            }
        }
        fetchGroups();
    }, []);

   
    const groupIDs = useMemo(()=>groups.map(group=>group.id), [groups]);

    const [ hash, setHash ] = useHash(groupIDs[0], groupIDs);

 
    const selectedGroup = useMemo(()=>groups.find(group=>group.id === hash), [groups, hash]);

    return <>
        <h1>Assignment 4 - Advanced React Part 1</h1>
        <ul>
            {groups.map(group=><li
                key={group.id}
                className={group.id === hash ? 'selected' : ''}
            >
                <a
                    href={'#' + group.id}
                    onClick={event=>{
                        event.preventDefault();
                        setHash(group.id);
                    }}
                >
                    {group.name}
                </a>
            </li>)}
        </ul>
        <Group group={selectedGroup} />
    </>;
}

export default App;
