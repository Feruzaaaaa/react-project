export function StudentCard({ name, group, favoriteSubject }) {
    return (
        <div style={{
            border: "1px solid #ccc",
            padding: 10,
            margin: 5,
            borderRadius: 6
        }}>
            <h3>{name}</h3>
            <p>Group: {group}</p>
            <p>Favorite Subject: {favoriteSubject}</p>
        </div>
    );
}
