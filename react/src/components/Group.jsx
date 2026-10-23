
const Group = props => {
    const { group } = props;

  
    if (!group) return null;

    return <h2>{group.name}</h2>;
}

export default Group;
