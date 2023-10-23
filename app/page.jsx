export default function Home() {
  return (
    <div>
      <section className="px-[100px]">
        <div className="flex item-center justify-between  pt-[100px] pb-[40px]">
          <h1 className="head">Categories +</h1>
          <div className="col flex gap-5">
            <span>3 Column</span>
            <span>4 Column</span>
          </div>
        </div>
        <div className="cards w-full grid grid-cols-3 gap-5">
          <div className="card flex flex-col gap-5 w-[393px] border-[1px] ">
            <img
              className="w-[392px] rounded-sm"
              src="https://cdn.pixabay.com/photo/2015/01/07/15/51/woman-591576_1280.jpg"
              alt=""
            />
            <p>29.Jun.2021</p>
            <h1>Instagram artists with great photography skills</h1>
            <h3>
              Many years ago, I worked for my parents who own a video production
              company.
            </h3>
            <hr />
            <p>By: Peter Rowardson</p>
          </div>
          <div className="card flex flex-col gap-5 w-[393px] border-[1px] ">
            <img
              className="w-[392px] rounded-sm"
              src="https://cdn.pixabay.com/photo/2015/01/07/15/51/woman-591576_1280.jpg"
              alt=""
            />
            <p>29.Jun.2021</p>
            <h1>Instagram artists with great photography skills</h1>
            <h3>
              Many years ago, I worked for my parents who own a video production
              company.
            </h3>
            <hr />
            <p>By: Peter Rowardson</p>
          </div>
          
          <div className="card flex flex-col gap-5 w-[393px] border-[1px] ">
            <img
              className="w-[392px] rounded-sm"
              src="https://cdn.pixabay.com/photo/2015/01/07/15/51/woman-591576_1280.jpg"
              alt=""
            />
            <p>29.Jun.2021</p>
            <h1>Instagram artists with great photography skills</h1>
            <h3>
              Many years ago, I worked for my parents who own a video production
              company.
            </h3>
            <hr />
            <p>By: Peter Rowardson</p>
          </div>
          
          <div className="card flex flex-col gap-5 w-[393px] border-[1px]  ">
            <img
              className="w-[392px] rounded-sm"
              src="https://cdn.pixabay.com/photo/2015/01/07/15/51/woman-591576_1280.jpg"
              alt=""
            />
            <p>29.Jun.2021</p>
            <h1>Instagram artists with great photography skills</h1>
            <h3>
              Many years ago, I worked for my parents who own a video production
              company.
            </h3>
            <hr />
            <p>By: Peter Rowardson</p>
          </div>
          
        </div>
        <div className="flex justify-center items-center mb-[50px]">

        <button className=" px-[50px] py-[7px] bg-[#212529] text-white ">More articles</button>
        </div>
      </section>
      <section className="pl-[100px] flex justify-between bg-[#212529]  text-white ">
        
        <div className="featured flex flex-col gap-y-5 ">
        <h1 className="text-[25px] pt-[100px] pb-[60px]">Featured Topics</h1>
          <div className="flex  gap-x-[30px]">
            <img className="w-[181px] h-[181px] rounded" src="https://cdn.pixabay.com/photo/2015/01/07/15/51/woman-591576_1280.jpg" alt="" />
            <div className="flex flex-col gap-5 w-[287px] ">
              <p className="text-[#E5E5E5] text-[12px] leading-[20px] font-light">29.Jun.2021</p>
              <h3 className="font-medium text-[16px]">A beautiful solo trip to the Lake Baikal</h3>
              <h4 className="text-[#E5E5E5] text-[12px]  leading-[20px]  font-light">Leather detail shoulder contrastic colour contour stunning silhouette working peplum.</h4>
            </div>
          </div>
          <div className="flex  gap-x-[30px]">
            <img className="w-[181px] h-[181px] rounded" src="https://cdn.pixabay.com/photo/2015/01/07/15/51/woman-591576_1280.jpg" alt="" />
            <div className="flex flex-col gap-5 w-[287px] ">
              <p className="text-[#E5E5E5] text-[12px] leading-[20px] font-light">29.Jun.2021</p>
              <h3 className="font-medium text-[16px]">A beautiful solo trip to the Lake Baikal</h3>
              <h4 className="text-[#E5E5E5] text-[12px]  leading-[20px]  font-light">Leather detail shoulder contrastic colour contour stunning silhouette working peplum.</h4>
            </div>
          </div> <div className="flex  gap-x-[30px]">
            <img className="w-[181px] h-[181px] rounded" src="https://cdn.pixabay.com/photo/2015/01/07/15/51/woman-591576_1280.jpg" alt="" />
            <div className="flex flex-col gap-5 w-[287px] ">
              <p className="text-[#E5E5E5] text-[12px] leading-[20px] font-light">29.Jun.2021</p>
              <h3 className="font-medium text-[16px]">A beautiful solo trip to the Lake Baikal</h3>
              <h4 className="text-[#E5E5E5] text-[12px]  leading-[20px]  font-light">Leather detail shoulder contrastic colour contour stunning silhouette working peplum.</h4>
            </div>
          </div>
          
        </div>
        
        <img className=" w-[705px] h-[905px]" src="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg" alt="" />
      </section>
      <section>
        <h1>It's a big world</h1>
      </section>
    </div>
  );
}
