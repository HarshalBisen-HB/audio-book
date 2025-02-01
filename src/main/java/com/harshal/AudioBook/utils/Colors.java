package com.harshal.AudioBook.utils;

import android.graphics.Bitmap;
import android.support.v7.graphics.Palette;



public class Colors {
    public static void createPaletteAsync(Bitmap b, Palette.PaletteAsyncListener finished){
        Palette.generateAsync(b, finished);
    }
}
