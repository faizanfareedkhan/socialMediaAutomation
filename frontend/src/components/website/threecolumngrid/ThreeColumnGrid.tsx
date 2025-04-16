const ThreeColumnGrid: React.FC = () => {
  return (
    <section className="w-full bg-primary text-secondary py-12 px-6 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Column 1 */}
        <div className="flex flex-col items-center space-y-4">
          <img
            src="/featureNav/content/scheduling/644ebc08d74e616f5514008e_Post to all socials.png"
            alt="Post to all socials"
            className="w-48 h-48 object-contain"
          />
          <h3 className="text-2xl font-bold">Post to all socials</h3>
          <p className="text-gray-600">
            Tired of juggling multiple tabs? Post simultaneously to your
            favorite social channels with ease.
          </p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col items-center space-y-4">
          <img
            src="/featureNav/content/scheduling/644ebc1057472fb3c1fe6d67_Plan in a calendar.png"
            alt="Plan in a calendar"
            className="w-48 h-48 object-contain"
          />
          <h3 className="text-2xl font-bold">Plan in a calendar</h3>
          <p className="text-gray-600">
            View and manage all your scheduled posts in one place with our
            intuitive calendar.
          </p>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col items-center space-y-4">
          <img
            src="/featureNav/content/scheduling/644ebc18c76d49df003750c2_Collaborate.png"
            alt="Collaborate"
            className="w-48 h-48 object-contain"
          />
          <h3 className="text-2xl font-bold">Collaborate</h3>
          <p className="text-gray-600">
            Work seamlessly with your team or clients—create dedicated
            workspaces, invite collaborators, and approve posts effortlessly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThreeColumnGrid;
