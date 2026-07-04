export default function BackgroundGlow() {
  return (
    <>
      <div className="absolute left-1/2 top-32 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-300/20 blur-[120px]" />

      <div className="absolute right-20 top-72 h-72 w-72 rounded-full bg-purple-300/20 blur-[120px]" />

      <div className="absolute left-20 top-[450px] h-72 w-72 rounded-full bg-pink-300/20 blur-[120px]" />
    </>
  );
}