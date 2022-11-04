import {
  GitHubIcon,
  ShareIcon,
  ShareMobileIcon,
  SlackIcon,
} from './components/Icons';
import ProfileAvatar from './components/ProfileImage';
import LinkButton from './components/LinkButton';
import Footer from './components/Footer';

function Home() {
  return (
    <>
      <main className="max-w-6xl mx-auto pt-16">
        <div className="relative flex justify-center">
          <button className="hidden md:block absolute top-[-21px] md:right-[284px] group cursor-pointer focus:ring focus:ring-[#F2F4F7] focus:rounded-full">
            <ShareIcon />
          </button>
          <button className="block md:hidden absolute right-[16px] top-[-21px] group cursor-pointer focus:ring focus:ring-[#F2F4F7] focus:rounded-full">
            <ShareMobileIcon />
          </button>
          <ProfileAvatar />
        </div>
        <div className="mt-6">
          <h5
            className="text-xl text-[#101828] text-center font-inter font-bold"
            id="twitter"
          >
            Noman Ejaz
          </h5>
          <h5
            className="text-xl text-[#101828] text-center font-inter font-bold hidden"
            id="slack"
          >
            Muhammad Noman Ejaz
          </h5>
        </div>
        <section className="mt-14 flex flex-col items-center gap-6 px-4 lg:px-0">
          <LinkButton
            label="Twitter Link"
            id="btn"
            link="https://twitter.com/nomanejaz132"
            target={true}
          />
          <LinkButton
            label="Zuri Team"
            id="btn__zuri"
            link="https://training.zuri.team/"
            target={true}
          />
          <LinkButton
            label="Zuri Books"
            id="books"
            link="https://books.zuri.team/"
            title="Books about design and programming"
            target={true}
          />
          <LinkButton
            label="Python Books"
            id="book__python"
            link="https://books.zuri.team/python-for-beginners?ref_id=nomanejaz132"
            target={true}
          />
          <LinkButton
            label="Background Check for Coders"
            id="pitch"
            link="https://background.zuri.team/"
            title="Backgrounds that will help you while designing and coding."
            target={true}
          />
          <LinkButton
            label="Design Books"
            id="book__design"
            link="https://books.zuri.team/design-rules"
            title="Books offered by Zuri Team"
            target={true}
          />
          <LinkButton
            label="Contact Me"
            id="contact"
            link="/contact"
            target={false}
          />
        </section>
        <section className="mt-6 py-6 flex items-center justify-center gap-6 ">
          <a href="https://hng9.slack.com/">
            <SlackIcon />
          </a>
          <a href="https://github.com/nomanejaz132">
            <GitHubIcon />
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
