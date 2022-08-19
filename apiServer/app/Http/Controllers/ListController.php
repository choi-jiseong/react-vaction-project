<?php

namespace App\Http\Controllers;

use App\Models\CheckList;
use Illuminate\Http\Request;

class ListController extends Controller
{
    public function getLists() {
        $lists = CheckList::all();

        return $lists;
    }

    public function getList($id) {
        $list = CheckList::find($id);

        return $list;
    }

    public function getDayLists($date) {
        $lists = CheckList::where('date', $date)->get();

        return $lists;
    }

    public function createList(Request $request) {
        $list = new CheckList();
        $list->title = $request->title;
        $list->professor = $request->professor;
        $list->applicant = $request->applicant;
        $list->date = $request->date;
        $list->save();
        return $list;
    }

    public function updateList(Request $request, $id) {
        $list = CheckList::find($id);
        $list->title = $request->title;
        $list->professor = $request->professor;
        $list->applicant = $request->applicant;
        $list->date = $request->date;
        $list->save();

        return $list;
    }

    public function destroyList($id) {
        $list = CheckList::find($id);
        $list->delete();

        return 'delete success';
    }
}
