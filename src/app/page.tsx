import { Button } from "./components/Button";

export default function Home() {
  return (
    <div>
      <div className="sm:text-5xl md:text-6xl inline-block mb-5 font-extrabold">
        Hi, I&apos;m <span className=" bg-gradient-to-r from-[#444a4a] via-[#294242] to-[#4c5c61] text-transparent bg-clip-text">Nikos!</span>
      </div>

      <div className="md:text-2xl sm:text-xl">
        <p>
          I am an 18-year-old living in Greece, striving to become a software engineer,
          experimenting in fields like web development & Discord bot development.
        </p>
        <p>
          I also love playing games and listening to hip hop, especially Eminem.
        </p>

        <div className="pt-5 flex items-center">
          <span>You can become a sponsor for me on GitHub if you wish to support me:</span>
          <Button className="bg-secondary ml-2" btnUrlInfo={{ url: "https://github.com/sponsors/nikosszzz" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} className="mr-2">
              <path fillRule={"evenodd"} clipRule={"evenodd"} d="M15.953 0C7.131 0 0 7.184 0 16.071 0 23.175 4.569 29.189 10.908 31.317c0.792 0.16 1.083 -0.346 1.083 -0.771 0 -0.372 -0.026 -1.649 -0.026 -2.98 -4.438 0.958 -5.362 -1.916 -5.362 -1.916 -0.713 -1.863 -1.77 -2.341 -1.77 -2.341 -1.452 -0.985 0.106 -0.985 0.106 -0.985 1.611 0.106 2.457 1.649 2.457 1.649 1.426 2.447 3.724 1.756 4.648 1.331 0.132 -1.038 0.555 -1.756 1.004 -2.155 -3.539 -0.372 -7.263 -1.756 -7.263 -7.929 0 -1.756 0.633 -3.193 1.637 -4.31 -0.159 -0.399 -0.713 -2.049 0.159 -4.258 0 0 1.347 -0.426 4.384 1.649a15.35 15.35 0 0 1 3.988 -0.532c1.347 0 2.72 0.186 3.988 0.532 3.038 -2.075 4.385 -1.649 4.385 -1.649 0.872 2.208 0.317 3.858 0.159 4.258 1.03 1.117 1.637 2.554 1.637 4.31 0 6.173 -3.724 7.53 -7.29 7.929 0.581 0.505 1.083 1.463 1.083 2.98 0 2.155 -0.026 3.885 -0.026 4.417 0 0.426 0.29 0.931 1.083 0.772C27.31 29.188 31.88 23.175 31.88 16.071 31.904 7.184 24.747 0 15.953 0" fill={"#fff"} />
            </svg>
            Sponsor
          </Button>
        </div>
      </div>
    </div>
  )
}
