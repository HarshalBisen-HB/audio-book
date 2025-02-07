package com.harshal.AudioBook.activities;

import android.support.v4.app.FragmentTransaction;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.view.View;

import com.harshal.AudioBook.fragments.Explorer;
import com.harshal.AudioBook.generic.AudioBook;
import com.harshal.AudioBook.fragments.Player;
import com.harshal.AudioBook.R;
import com.harshal.AudioBook.generic.SlidingLayout;
import com.harshal.AudioBook.interfaces.LayoutFinished;
import com.harshal.AudioBook.interfaces.QueryFinished;
import com.harshal.AudioBook.async.LibrivoxRetriever;
import com.sothree.slidinguppanel.SlidingUpPanelLayout;

import java.io.Serializable;
import java.util.ArrayList;

public class MainScreen extends AppCompatActivity implements Player.PlayerControls, Serializable {
    private SlidingLayout layout;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_screen);
        setSupportActionBar((Toolbar)findViewById(R.id.toolbar));

        layout = findViewById(R.id.sliding_panel);
        layout.setPanelState(SlidingUpPanelLayout.PanelState.HIDDEN);

        addExplorer();
    }

    public void addExplorer(){
        FragmentTransaction fragmentTransaction = getSupportFragmentManager().beginTransaction();
        Explorer frag = new Explorer();
        Bundle b = new Bundle();
        b.putSerializable("PlayerControls", this);
        frag.setArguments(b);

        fragmentTransaction.add(R.id.explorer_container, frag);
        fragmentTransaction.commit();
    }

    public void openPlayer() {
        LibrivoxRetriever retriever = new LibrivoxRetriever();
        retriever.addOnCompleted(new QueryFinished<ArrayList<AudioBook>>() {
            @Override
            public void onQueryFinished(ArrayList<AudioBook> o) {
                android.app.FragmentTransaction fragmentTransaction = getFragmentManager().beginTransaction();
                Player frag = new Player();
                Bundle b = new Bundle();
                b.putSerializable("AUDIO_BOOK", o.get(0));
                frag.setArguments(b);

                fragmentTransaction.add(R.id.player_container, frag);
                fragmentTransaction.addToBackStack(null);
                fragmentTransaction.commit();

                frag.addOnLayoutFinished(new LayoutFinished() {
                    @Override
                    public void onLayoutFinished(View v) {
                        layout.setDragView(v);
                    }
                });

                frag.addOnMusicLoaded(new Player.MusicLoaded() {
                    @Override
                    public void onMusicLoaded() {
                        layout.setPanelState(SlidingUpPanelLayout.PanelState.EXPANDED);
                    }
                });
            }
        });
        retriever.execute("https://librivox.org/api/feed/audiobooks/?title=^pride%20and%20prejudice&format=json&extended=1");
    }

}