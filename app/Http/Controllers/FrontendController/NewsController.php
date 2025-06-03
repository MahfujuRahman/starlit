<?php

namespace App\Http\Controllers\FrontendController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NewsController extends Controller
{
    public function index()
    {
        $blog_category = DB::table("blog_categories")->get();
        $blogs = DB::table("blogs")
            ->join('blog_categories', 'blogs.blog_category_id', '=', 'blog_categories.id')
            ->select('blogs.*', 'blog_categories.title as category_name')
            ->paginate(1);


        return view('frontend.pages.news.news', compact('blogs','blog_category'));
    }
    public function news_details($slug)
    {
        return view('frontend.pages.news.news_details.news_details');
    }
}
