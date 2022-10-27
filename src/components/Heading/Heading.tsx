interface Props {
    title: string;
}

const Heading: React.FC<Props> = (props) => {
    const { title } = props;
    return (
        <div className="h-[66px] w-full flex items-center justify-center border-b border-[#ccc]">
            <h1 className="text-[36px] font-bold">{title}</h1>
        </div>
    );
};

export default Heading;
