
export const TextSummary = ({ orderInfo }) => {
    return (
        <>
            {orderInfo().map((info, index) => (
                <span key={index}>
                    {info.label && <span>{info.label} </span>}
                    {info.value ? (
                        <span className="text-light-cyan">{info.value}</span>
                    ) : (
                        <span className="text-light-cyan">_____</span>
                    )}
                </span>
            ))}
            {`.”`}
        </>
    );
};


