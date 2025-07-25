export default function Introduction() {
    return (
        <>
            <div className="flex justify-between align-center">
                <div className="bg-tertiary p-4 h-max rounded-2xl">
                    <h2>Text Content</h2>
                    <p>This is some text content that describes the picture.</p>
                </div>
                <div className="">
                    <img src="placeholder.jpg" alt="Description of image" />
                </div>
            </div>
        </>
    );
}