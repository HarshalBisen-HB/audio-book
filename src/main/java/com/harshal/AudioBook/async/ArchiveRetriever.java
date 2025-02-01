package com.harshal.AudioBook.async;

import android.os.AsyncTask;

import com.harshal.AudioBook.generic.AudioBook;
import com.harshal.AudioBook.interfaces.QueryFinished;
import com.harshal.AudioBook.utils.Web;

import org.json.JSONArray;
import org.json.JSONObject;



public class ArchiveRetriever extends AsyncTask<String, Void, Void> {
    private AudioBook reference;
    private QueryFinished callback;

    public ArchiveRetriever(AudioBook book) {
        super();
        this.reference = book;
    }

    @Override
    protected Void doInBackground(String... strings) {
        try {
            JSONObject iarchiveData = new JSONObject(Web.getWebData(strings[0]));
            String base = iarchiveData.optString("d1") + iarchiveData.optString("dir");

            JSONArray files = iarchiveData.optJSONArray("files");
            for (int i = 0; i < files.length(); i++) {
                JSONObject current = files.getJSONObject(i);
                if (current.optString("source").equals("original") && current.optString("format").toLowerCase().contains("mp3")) {
                    reference.addChapter(current.optString("title"), base + "/" + current.optString("name"), current.optString("track"), current.optString("length"));
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }

    @Override
    protected void onPostExecute(Void aVoid) {
        super.onPostExecute(aVoid);
        callback.onQueryFinished(aVoid);
    }

    public void addOnCompleted(QueryFinished callback) {
        this.callback = callback;
    }
}
