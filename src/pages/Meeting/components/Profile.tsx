const RandomColor = [
  "linear-gradient(to top, #accbee 0%, #e7f0fd 100%)",
  "linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)",
  "linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)",
];

const Profile = ({ index }: { index: number }) => {
  return (
    <div
      className="w-[40px] h-[40px] rounded-full"
      style={{
        backgroundImage:
          RandomColor[index % 3 === 0 ? 2 : index % 2 === 0 ? 0 : 1],
      }}
    />
  );
};

export default Profile;
