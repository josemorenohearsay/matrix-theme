import 'package:flutter/material.dart';
import 'package:selam/src/constants/colors.dart';

import '../../../constants/image_strings.dart';

class About extends StatelessWidget {
  const About({super.key});

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return SafeArea(
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 30, horizontal: 15),
        decoration: const BoxDecoration(
          image:
              DecorationImage(image: AssetImage(background), fit: BoxFit.cover),
        ),
        child: Scaffold(
          backgroundColor: Colors.transparent,
          body: Container(
            height: size.height,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.start,
              children: [
                InkWell(
                  onTap: (() {}),
                  child: const Icon(
                    Icons.arrow_back,
                    size: 30,
                    color: secondaryColor,
                  ),
                ),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    Padding(
                      padding: const EdgeInsets.symmetric(vertical: 30),
                      child: Text(
                        textAlign: TextAlign.center,
                        'About the App',
                        style: TextStyle(
                            fontSize: 20,
                            fontFamily: 'Poppins Bold',
                            color: secondaryColor),
                      ),
                    ),
                    Text(
                      textAlign: TextAlign.start,
                      'LICENCES',
                      style: TextStyle(
                          fontSize: 14,
                          fontFamily: 'Poppins Bold',
                          color: secondaryColor),
                    ),
                  ],
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
