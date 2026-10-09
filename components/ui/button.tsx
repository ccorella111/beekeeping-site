interface ButtonProps{
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary";
}

export function Button({children, href, onClick, variant="primary"}: ButtonProps){
    const styles =
        variant === "primary"
        ? "bg-honey text-wax hover:bg-honey/90"
        : "bg-transparent border border-honey text-honey hover:bg-honey/10"

    const classes = `px-4 py-2 rounded-md font-medium transition ${styles}`;

    if (href){
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={classes} >
            {children}
        </button>
    );
}