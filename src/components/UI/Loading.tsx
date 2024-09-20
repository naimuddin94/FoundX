import { Spinner } from "@nextui-org/spinner";

const Loading = () => {
  return (
    <div className="h-screen fixed inset-0 bg-white/5 backdrop-blur-sm z-[999] flex justify-center items-center">
      <Spinner size="lg" />
    </div>
  );
};

export default Loading;
