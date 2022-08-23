type Props = {
title: string;
children: React.ReactNode;
className?: string;
};
const Grid = ({title, children, className}: Props)=>{
    return(
        <div className={className}>
            <div className="text-xl font-bold pb-4">{title}</div>
            <div className="grid grid-cols-auto-fill gap-8">{children}</div>
        </div>
    );
}

export default Grid;