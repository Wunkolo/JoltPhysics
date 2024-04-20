/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Jolt Physics", "index.html", [
    [ "Architecture of Jolt Physics", "index.html#architecture-jolt-physics", null ],
    [ "Bodies", "index.html#bodies", [
      [ "Types", "index.html#body-types", null ],
      [ "Creating Bodies", "index.html#creating-bodies", null ],
      [ "Multithreaded Access", "index.html#autotoc_md75", null ],
      [ "Single Threaded Access", "index.html#single-threaded-access", null ],
      [ "Shapes", "index.html#shapes", [
        [ "Dynamic Mesh Shapes", "index.html#dynamic-mesh-shapes", null ],
        [ "Creating Shapes", "index.html#creating-shapes", null ],
        [ "Saving Shapes", "index.html#saving-shapes", null ],
        [ "Convex Radius", "index.html#convex-radius", null ],
        [ "Center of Mass", "index.html#center-of-mass", null ],
        [ "Creating Custom Shapes", "index.html#creating-custom-shapes", null ]
      ] ],
      [ "Sensors", "index.html#sensors", null ],
      [ "Sleeping", "index.html#sleeping-bodies", null ],
      [ "Soft Bodies", "index.html#soft-bodies", [
        [ "Soft Body Contact Listeners", "index.html#soft-body-contact-listener", null ],
        [ "Skinning Soft Bodies", "index.html#skinning-soft-bodies", null ],
        [ "Soft Body Work In Progress", "index.html#soft-body-wip", null ]
      ] ]
    ] ],
    [ "Constraints", "index.html#constraints", [
      [ "Constraint Motors", "index.html#constraint-motors", null ],
      [ "Breakable Constraints", "index.html#breakable-constraints", null ]
    ] ],
    [ "Collision Detection", "index.html#collision-detection", [
      [ "Broad Phase", "index.html#broad-phase", null ],
      [ "Narrow Phase", "index.html#narrow-phase", null ],
      [ "Collision Filtering", "index.html#collision-filtering", null ],
      [ "Continuous Collision Detection", "index.html#continuous-collision-detection", null ],
      [ "Ghost Collisions", "index.html#ghost-collisions", null ]
    ] ],
    [ "Character Controllers", "index.html#character-controllers", null ],
    [ "The Simulation Step", "index.html#the-simulation-step", null ],
    [ "Conventions and Limits", "index.html#conventions-and-limits", null ],
    [ "Big Worlds", "index.html#big-worlds", null ],
    [ "Deterministic Simulation", "index.html#deterministic-simulation", null ],
    [ "Rolling Back a Simulation", "index.html#rolling-back-a-simulation", null ],
    [ "Being Sloppy While Still Being Deterministic", "index.html#sloppy-determinism", null ],
    [ "Working With Multiple Physics Systems", "index.html#working-with-multiple-physics-systems", null ],
    [ "Debug Rendering", "index.html#debug-rendering", null ],
    [ "Memory Management", "index.html#memory-management", null ],
    [ "The Simulation Step in Detail", "index.html#the-simulation-step-in-detail", [
      [ "Broad Phase Update Prepare", "index.html#broad-phase-update-prepare", null ],
      [ "Broad Phase Update Finalize", "index.html#broad-phase-update-finalize", null ],
      [ "Step Listeners", "index.html#step-listeners-update", null ],
      [ "Apply Gravity", "index.html#apply-gravity-update", null ],
      [ "Determine Active Constraints", "index.html#determine-active-constraints", null ],
      [ "Build Islands from Constraints", "index.html#build-islands-from-constraints", null ],
      [ "Find Collisions", "index.html#find-collisions", null ],
      [ "Setup Velocity Constraints", "index.html#setup-velocity-constraints", null ],
      [ "Finalize Islands", "index.html#finalize-islands", null ],
      [ "Set Body Island Idx", "index.html#set-body-island-idx", null ],
      [ "Solve Velocity Constraints", "index.html#solve-velocity-constraints", null ],
      [ "Pre Integrate", "index.html#pre-integrate", null ],
      [ "Integrate & Clamp Velocities", "index.html#integrate-and-clamp-velocities", null ],
      [ "Post Integrate", "index.html#post-integrate", null ],
      [ "Find CCD Contacts", "index.html#find-ccd-contacts", null ],
      [ "Resolve CCD Contacts", "index.html#resolve-ccd-contacts", null ],
      [ "Finalize Contact Cache, Contact Removed Callbacks", "index.html#finalize-contact-cache", null ],
      [ "Solve Position Constraints, Update Bodies Broad Phase", "index.html#solve-position-constraints", null ],
      [ "Soft Body Prepare", "index.html#soft-body-prepare", null ],
      [ "Soft Body Collide", "index.html#soft-body-collide", null ],
      [ "Soft Body Simulate", "index.html#soft-body-simulate", null ],
      [ "Soft Body Finalize", "index.html#soft-body-finalize", null ]
    ] ],
    [ "Jolt Physics Samples", "md__docs_2_samples.html", [
      [ "General Controls", "md__docs_2_samples.html#autotoc_md2", null ],
      [ "The Tests", "md__docs_2_samples.html#autotoc_md3", [
        [ "Vehicles", "md__docs_2_samples.html#autotoc_md5", null ],
        [ "Rig (Ragdolls)", "md__docs_2_samples.html#autotoc_md7", null ],
        [ "Soft Body", "md__docs_2_samples.html#autotoc_md9", null ],
        [ "Character", "md__docs_2_samples.html#autotoc_md11", null ],
        [ "Water", "md__docs_2_samples.html#autotoc_md12", null ],
        [ "Constraints", "md__docs_2_samples.html#autotoc_md13", null ],
        [ "General", "md__docs_2_samples.html#autotoc_md14", null ],
        [ "Shapes & Scaled Shapes", "md__docs_2_samples.html#autotoc_md15", null ]
      ] ]
    ] ],
    [ "Performance Test", "md__docs_2_performance_test.html", [
      [ "Commandline options", "md__docs_2_performance_test.html#autotoc_md4", null ],
      [ "Output", "md__docs_2_performance_test.html#autotoc_md6", null ],
      [ "Results", "md__docs_2_performance_test.html#autotoc_md8", null ]
    ] ],
    [ "Release Notes", "md__docs_2_release_notes.html", [
      [ "Unreleased changes", "md__docs_2_release_notes.html#autotoc_md17", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md18", [
          [ "Soft Body", "md__docs_2_release_notes.html#autotoc_md19", null ],
          [ "Various", "md__docs_2_release_notes.html#autotoc_md20", null ]
        ] ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md21", null ]
      ] ],
      [ "v5.0.0", "md__docs_2_release_notes.html#autotoc_md22", [
        [ "New Functionality", "md__docs_2_release_notes.html#autotoc_md23", [
          [ "Soft Body", "md__docs_2_release_notes.html#autotoc_md24", null ],
          [ "Vehicles", "md__docs_2_release_notes.html#autotoc_md25", null ],
          [ "Character", "md__docs_2_release_notes.html#autotoc_md26", null ],
          [ "Constraints", "md__docs_2_release_notes.html#autotoc_md27", null ],
          [ "Collision Detection", "md__docs_2_release_notes.html#autotoc_md28", null ],
          [ "Simulation", "md__docs_2_release_notes.html#autotoc_md29", null ],
          [ "Various", "md__docs_2_release_notes.html#autotoc_md30", null ]
        ] ],
        [ "Removed functionality", "md__docs_2_release_notes.html#autotoc_md31", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md32", null ]
      ] ],
      [ "v4.0.2", "md__docs_2_release_notes.html#autotoc_md33", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md34", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md36", null ]
      ] ],
      [ "v4.0.1", "md__docs_2_release_notes.html#autotoc_md37", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md38", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md40", null ]
      ] ],
      [ "v4.0.0", "md__docs_2_release_notes.html#autotoc_md41", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md42", null ],
        [ "Removed functionality", "md__docs_2_release_notes.html#autotoc_md44", null ],
        [ "New supported platforms", "md__docs_2_release_notes.html#autotoc_md46", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md47", null ]
      ] ],
      [ "v3.0.0", "md__docs_2_release_notes.html#autotoc_md48", null ],
      [ "v2.0.1", "md__docs_2_release_notes.html#autotoc_md49", null ],
      [ "v2.0.0", "md__docs_2_release_notes.html#autotoc_md50", [
        [ "Major new functionality", "md__docs_2_release_notes.html#autotoc_md51", null ],
        [ "New supported compilers", "md__docs_2_release_notes.html#autotoc_md53", null ],
        [ "New supported platforms", "md__docs_2_release_notes.html#autotoc_md54", null ]
      ] ],
      [ "v1.1.0", "md__docs_2_release_notes.html#autotoc_md55", null ],
      [ "v1.0.0", "md__docs_2_release_notes.html#autotoc_md56", null ]
    ] ],
    [ "Breaking API Changes", "md__docs_2_a_p_i_changes.html", [
      [ "Changes between v5.0.0 and latest", "md__docs_2_a_p_i_changes.html#autotoc_md35", null ],
      [ "Changes between v4.0.2 and v5.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md39", null ],
      [ "Changes between v4.0.0 and v4.0.2", "md__docs_2_a_p_i_changes.html#autotoc_md43", null ],
      [ "Changes between v3.0.1 and v4.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md45", null ],
      [ "Changes between v2.0.1 and v3.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md52", null ],
      [ "Changes between v1.1.0 and v2.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md57", null ],
      [ "Changes between v1.0.0 and v1.1.0", "md__docs_2_a_p_i_changes.html#autotoc_md58", null ],
      [ "Changes between v0.0.0 and v1.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md59", null ]
    ] ],
    [ "Building and Using Jolt Physics", "md__build_2_r_e_a_d_m_e.html", [
      [ "Build Types", "md__build_2_r_e_a_d_m_e.html#autotoc_md62", null ],
      [ "Includes", "md__build_2_r_e_a_d_m_e.html#autotoc_md63", null ],
      [ "Defines", "md__build_2_r_e_a_d_m_e.html#autotoc_md64", null ],
      [ "Logging & Asserting", "md__build_2_r_e_a_d_m_e.html#autotoc_md65", null ],
      [ "Custom Memory Allocator", "md__build_2_r_e_a_d_m_e.html#autotoc_md66", null ],
      [ "Building", "md__build_2_r_e_a_d_m_e.html#autotoc_md67", null ],
      [ "Other Build Tools", "md__build_2_r_e_a_d_m_e.html#autotoc_md68", null ],
      [ "Errors", "md__build_2_r_e_a_d_m_e.html#autotoc_md69", [
        [ "Link Error: File Format Not Recognized", "md__build_2_r_e_a_d_m_e.html#autotoc_md70", null ],
        [ "Link Error: Unresolved External Symbol", "md__build_2_r_e_a_d_m_e.html#autotoc_md71", null ],
        [ "DirectX Error", "md__build_2_r_e_a_d_m_e.html#autotoc_md72", null ],
        [ "Illegal Instruction Error", "md__build_2_r_e_a_d_m_e.html#autotoc_md73", null ]
      ] ],
      [ "Doxygen on Windows", "md__build_2_r_e_a_d_m_e.html#autotoc_md74", null ]
    ] ],
    [ "Projects Using Jolt", "md__docs_2_projects_using_jolt.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Symbols", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_a_a_b_b_tree_builder_8cpp.html",
"_constraint_8h.html#adfc8350888df0c3a51714b7f372baf2dafb845762a66c26782f477febab5344dc",
"_hinge_constraint_8h.html",
"_object_vs_broad_phase_layer_filter_table_8h_source.html",
"_serializable_attribute_8h_source.html",
"_transformed_shape_8h.html",
"class_all_hit_collision_collector.html#af3bfc75b183c4406c65807ff0d62dd43",
"class_body_interface.html#a4e0007d53ba413e916a527b870b35a87",
"class_broad_phase_layer_interface_mask.html#a5c4d1d6ac5321a8bd30ddd54be36f24d",
"class_character_virtual_settings.html#a71a9f1bf58ebf5c2d8b272f62fb7c734",
"class_constraint.html#a829eb3dda397de5cc7a7799ce959cc8b",
"class_convex_shape_settings.html#a752045fcec2dba15556b60cc249590e5",
"class_debug_renderer_simple.html#a7f93b6ccb5960002544ce00fc743dd87",
"class_gear_constraint_part.html",
"class_indexed_triangle_no_material.html#ae51f167ef9a45334dad213a2f46cf79e",
"class_mat44.html#ac0c3181759450b3498b5dc53967f803d",
"class_narrow_phase_query.html#a820937ebfc2c8ab46daade8e007f2269",
"class_path_constraint_path.html#ade0a2c8ce722ae7ff573b04690250e21",
"class_pulley_constraint_settings.html#a708a1e9d3a6408bf8db17b495a2bb9a9",
"class_ref_const.html#a423ea3dc5a5d83bf4a5e3fbcca36acf4",
"class_shape.html#a99f077aa0ffef0d518ced9b69ca21d18",
"class_slider_constraint.html#a8f67a775520b7f735c77b4aabb9187e4",
"class_soft_body_vertex.html",
"class_swing_twist_constraint.html#a82b21f86dc816c6a989df827c04d2a7b",
"class_triangle_shape_1_1_triangle_no_convex.html",
"class_vec4.html#a914f0d0d23cb0cfc6cc7a58bd5f2ac01",
"class_vehicle_transmission_settings.html#a3632548e7e09e7eb2fc8594ff039265e",
"functions_vars_x.html",
"struct_a_a_b_b_tree_builder_stats.html#a567b593b4f4bb7cdc2977a2a624da662",
"struct_fixed_size_free_list_1_1_batch.html",
"struct_soft_body_shared_settings_1_1_dihedral_bend.html#af40fcceebc4074cd387372bb8bd60044"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';