import Link from "next/link";

const AboutLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <h1>Hello About Page</h1>
        {children}
        <Link href="/">Home</Link>
      </body>
    </html>
       
  );
}
export default AboutLayout;