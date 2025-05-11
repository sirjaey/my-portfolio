
function Navbar({ activeSection, sections }) {
    
    return (
        <nav className="nav">
            <ul>
                {sections.map((section) => (
                    <a
                        href={`#${section.id}`}
                        key={section.id}
                        className={activeSection === section.id ? "active" : ""}>
                        <li>{section.name}</li>
                    </a>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;