interface BoxScrollProps {
    children: React.ReactNode;
}

const BoxScroll:React.FC<BoxScrollProps> = ({children}) => {
    return ( 
        <div className="max-w-[800px] w-full">
            {children}
        </div>
     );
}
 
export default BoxScroll;