import Image from "next/image";

function Optimization_and_Recommendations() {
    return (
        <main className="container flex flex-col items-center py-8">
            <h1 className="text-center mt-5 mb-5 font-tahoma font-bold text-brand-special-100 text-4xl">Recommendations</h1>
                <p className="font-roboto text-center text-base lg:text-xl text-brand-special-100 w-4/5 lg:w-3/5">
                    Unfortunately, this feature is not available yet. However, we are working very hard here at SpecsChecks to deliver it to you as soon as possible! 👨🏻‍💻
                </p>
                <div className="flex items-center justify-center">
                <Image
                    src="/hero/specschecks-comingsoon.png"
                    alt="SpecsChecksComingSoon"
                    width="400"
                    height="300"
                    className="rounded-md"
                />
        </div>
        </main>  
    );
}

export default Optimization_and_Recommendations;