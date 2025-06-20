export function About() {
  return (
    <>
      <div className="bg-gray-100">
        <div
          className="relative h-screen bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://pixum-cms.imgix.net/3enwoP7UhgKbBQ9Ranuaeg/f7f999bce59c040542c73bd4638ed178/img_pwb_galeryprint_close-up_winter_cutout_4zu3.png)",
          }}
        >
          <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center">
            <h4 className="text-4xl md:text-6xl font-bold text-black">
              About us
            </h4>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap:8">
            <div>
              <img
                src="https://t3.ftcdn.net/jpg/04/09/34/66/360_F_409346621_8d9NAfEHWnNFIVmQxH8yzfNs0f7dHanF.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Who we are</h3>
              <p className="text-gray-700 mb-4">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat suscipit a odit amet, atque praesentium voluptas earum
                corrupti non. Mollitia rem architecto, veritatis quidem veniam
                nobis doloremque officia officiis tempora!
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Mssion</h3>
              <p className="text-gray-700 mb-4">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus eos recusandae dolore dolores corrupti, laudantium
                modi quaerat aut facilis illum cumque consequuntur repellat
                asperiores cum mollitia odit nobis fugit cupiditate!
              </p>

              
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
