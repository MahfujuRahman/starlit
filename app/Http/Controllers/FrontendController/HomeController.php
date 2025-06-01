<?php

namespace App\Http\Controllers\FrontendController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProjectModel;
use Botble\RealEstate\Models\Project;

use App\Modules\Management\BannerManagement\Banner\Models\Model as Banner;
use App\Modules\Management\AboutUsManagement\AboutUs\Models\Model as AboutUs;
use App\Modules\Management\AtAGlanceManagement\AtAGlance\Models\Model as AtaGlance;
use App\Modules\Management\OurTeamManagement\OurTeam\Models\Model as OurTeam;
use App\Modules\Management\TodaySellsManagement\TodaySells\Models\Model as TodaySells;
use App\Modules\Management\OurServiceManagement\OurService\Models\Model as OurService;



class HomeController extends Controller
{
    public function index()
    {
        $banner = Banner::latest()->first();
        $about_us = AboutUs::latest()->first();
        $at_a_glance = AtaGlance::latest()->limit(4)->get();
        $our_team = OurTeam::latest()->limit(4)->get();
        $today_sells = TodaySells::latest()->first();
        $our_services = OurService::latest()->limit(3)->get();
        // dd($our_services->toArray());
        // dd($about_us?->video_url);
        return view('frontend.pages.home.home', 
                compact(
                    'banner',
                    'about_us', 
                    'at_a_glance',
                    'our_team',
                    'today_sells',
                    'our_services',
                ));
    }

}
