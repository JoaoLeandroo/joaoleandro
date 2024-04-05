interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return ( 
        <div className="max-w-[1280px] w-full px-4 md:px-20 relative mx-auto">
            {children}
        </div>
     );
}
 
export default Container;