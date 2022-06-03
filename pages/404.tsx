import Link from "next/link"

const NotFoundPage = () => {
    return (
        <div className="text-center mt-10">
            <h1 className="font-bold text-3xl">Ooops...</h1>
            <h2 className="font-semibold text-2xl mt-5">That page cannot be found</h2>
            <p className="mt-3 underline text-orange-600 font-semibold"><Link href="/">Back to home</Link></p>
        </div>
    )

}


export default NotFoundPage